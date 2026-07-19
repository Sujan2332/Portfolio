import { useEffect, useRef, useCallback } from 'react';

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
            setTimeout(() => {
              el.classList.add('revealed');
            }, delay);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function useCounter(target: number, duration = 2000, start = false) {
  const countRef = useRef(0);
  const frameRef = useRef<number>(0);

  const animate = useCallback((el: HTMLElement) => {
    const startTime = performance.now();
    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString();
      }
    };
    frameRef.current = requestAnimationFrame(update);
  }, [target, duration]);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return { countRef, animate };
}

export function useMouseParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;

      const layers = el.querySelectorAll<HTMLElement>('[data-depth]');
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth || '0');
        layer.style.transform = `translate(${dx * depth * 30}px, ${dy * depth * 20}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return ref;
}
