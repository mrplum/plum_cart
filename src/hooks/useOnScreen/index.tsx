import React, { useState, useEffect, RefObject } from "react";

export default function useOnScreen(ref: any): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current as Element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
