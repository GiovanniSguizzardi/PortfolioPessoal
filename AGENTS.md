## Animation architecture
- Use AnimatedSection for independent scroll reveals of headings and repeated items, not entire page sections, so tall sections remain accessible and each item appears when reached.
- Keep reduced-motion preferences honored through MotionConfig and the shared reveal component so animation changes remain accessible.