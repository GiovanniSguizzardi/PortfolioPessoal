import { useEffect } from "react";

type WebMCPTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, string>) => Promise<{ content: { type: string; text: string }[] }>;
};

const text = (value: string) => ({ content: [{ type: "text", text: value }] });

const SECTIONS = ["inicio", "sobre", "projetos", "projetos-faculdade", "carreira", "contato"];

/**
 * Exposes site actions to AI agents via the WebMCP API.
 * https://webmachinelearning.github.io/webmcp/
 */
export function useWebMCP() {
  useEffect(() => {
    const modelContext = (navigator as unknown as {
      modelContext?: { provideContext: (config: { tools: WebMCPTool[] }) => void };
    }).modelContext;

    if (!modelContext?.provideContext) return;

    const tools: WebMCPTool[] = [
      {
        name: "list_sections",
        description: "Lista as seções disponíveis no portfólio de Giovanni.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: async () => text(SECTIONS.join(", ")),
      },
      {
        name: "navigate_to_section",
        description:
          "Rola a página até uma seção do portfólio (inicio, sobre, projetos, carreira, contato).",
        inputSchema: {
          type: "object",
          properties: {
            section: { type: "string", enum: SECTIONS, description: "Nome da seção" },
          },
          required: ["section"],
          additionalProperties: false,
        },
        execute: async ({ section }) => {
          const el = document.getElementById(section);
          if (!el) return text(`Seção "${section}" não encontrada.`);
          el.scrollIntoView({ behavior: "smooth" });
          return text(`Navegado para a seção "${section}".`);
        },
      },
      {
        name: "get_section_content",
        description: "Retorna o conteúdo em texto de uma seção do portfólio.",
        inputSchema: {
          type: "object",
          properties: {
            section: { type: "string", enum: SECTIONS, description: "Nome da seção" },
          },
          required: ["section"],
          additionalProperties: false,
        },
        execute: async ({ section }) => {
          const el = document.getElementById(section);
          if (!el) return text(`Seção "${section}" não encontrada.`);
          return text(el.innerText.trim().slice(0, 4000));
        },
      },
    ];

    modelContext.provideContext({ tools });
  }, []);
}
