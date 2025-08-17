"use client";

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.15,
  rootMargin = '0px 0px -20px 0px',
  triggerOnce = false
}: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible] as const;
};

export const useStaggeredAnimation = (
  itemsCount: number,
  delay: number = 100,
  options?: UseScrollAnimationOptions
) => {
  const [containerRef, isVisible] = useScrollAnimation({ ...options, triggerOnce: false });
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    if (isVisible && visibleItems.length === 0) {
      const _newVisibleItems: boolean[] = [];

      for (let i = 0; i < itemsCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        }, i * delay);
      }
    }
  }, [isVisible, itemsCount, delay, visibleItems.length]);

  const resetAnimation = () => {
    setVisibleItems([]);
  };

  return [containerRef, visibleItems, resetAnimation] as const;
};
