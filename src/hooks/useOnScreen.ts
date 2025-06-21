import { useState, useEffect, RefObject, MutableRefObject } from 'react';

interface UseOnScreenOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

function useOnScreen(
  ref: RefObject<Element> | MutableRefObject<Element | null>,
  options: UseOnScreenOptions = { threshold: 0.1, rootMargin: '0px' }
): [MutableRefObject<Element | null>, boolean] {
  const [isIntersecting, setIntersecting] = useState(false);
  const [elementRef, setElementRef] = useState<Element | null>(null);

  useEffect(() => {
    // Update the ref to the actual DOM element
    if (ref.current) {
      setElementRef(ref.current);
    }
  }, [ref]);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: options.rootMargin,
        threshold: options.threshold,
      }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, options.rootMargin, options.threshold]); // Dependencies updated

  return [ref as MutableRefObject<Element | null>, isIntersecting];
}

export default useOnScreen;
