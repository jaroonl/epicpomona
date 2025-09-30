import { useEffect, useRef, useState } from "react";

type Options = {
  enter?: number;       // % visible to turn ON (0..1)
  exit?: number;        // % visible to turn OFF (0..1), must be < enter
  root?: Element | null;
  rootMargin?: string;  // add a bit of hysteresis vertically too
  debounceMs?: number;  // optional micro-debounce
};

export function useScrollAnimation<T extends HTMLElement>({
  enter = 0.3,
  exit = 0.1,
  root = null,
  rootMargin = "0px 0px -15% 0px",
  debounceMs = 0,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onChange = (next: boolean) => {
      if (debounceMs <= 0) {
        setVisible(next);
        return;
      }
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
      debounceRef.current = window.setTimeout(() => setVisible(next), debounceMs);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const r = entry.intersectionRatio;
        if (!visible && r >= enter) onChange(true);
        else if (visible && r <= exit) onChange(false);
      },
      { root, threshold: [exit, enter], rootMargin }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [enter, exit, root, rootMargin, debounceMs, visible]);

  return [ref, visible] as const;
}
