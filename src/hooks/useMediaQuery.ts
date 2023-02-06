import { useState, useEffect } from 'react';

import { debounce } from 'helper';

export default function useMediaQuery(min_width: number) {
  const [isWidthOver, setIsWidthOver] = useState(false);

  useEffect(() => {
    if (window) {
      setIsWidthOver(min_width >= window?.innerWidth);
      const handleResize = debounce(() => setIsWidthOver(min_width >= window?.innerWidth), 100);

      window?.addEventListener('resize', handleResize);
      return () => {
        window?.removeEventListener('resize', handleResize);
      };
    }
  }, [min_width]);

  return isWidthOver;
}
