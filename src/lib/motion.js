/** Shared motion tokens — matches marketing section easing. */
export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const fadeUpDelayed = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: EASE },
  },
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const viewportOnce = { once: true, margin: "-40px 0px" };

export function inViewProps(reducedMotion) {
  if (reducedMotion) {
    return { initial: false };
  }

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOnce,
  };
}
