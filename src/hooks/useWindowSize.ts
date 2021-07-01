import { useState, useEffect } from 'react';

export function useWindowSize(breakpoint?: number) {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const mobileBreakpoint = breakpoint ? breakpoint : 480;

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width <= mobileBreakpoint;

  return { windowSize, isMobile };
}
