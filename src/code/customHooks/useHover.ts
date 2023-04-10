import { useState, useEffect, useRef } from 'react';

//!change cache any if it needs
export function useHover<T>() {
  const [value, setValue] = useState(false);

  const ref = useRef<T | any>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      node.removeEventListener('mouseover', handleMouseOver);
      node.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref.current]);

  return [ref, value];
}
