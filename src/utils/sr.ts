import ScrollReveal from "scrollreveal";

const isSSR = typeof window === 'undefined';
const ScrollRevealed = isSSR ? null : ScrollReveal();

export default ScrollRevealed;