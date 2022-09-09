export const mainimageanime = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1.1, ease: "easeInOut" },
    scale: 1,
  },
};

export const outlineanimation = {
  initial: { opacity: 0, y: "-50%", x: "-50%", scale: 0.8 },
  animate: {
    opacity: 1,
    y: "-50%",
    x: "-50%",
    transition: { duration: 1.2, ease: "easeInOut" },
    scale: 1,
  },
};
