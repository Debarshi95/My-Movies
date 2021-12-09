import { useCallback, useEffect, useRef, useState } from 'react';

const useIntersection = (elem) => {
  const [visible, setVisible] = useState(false);
  const observer = useRef();

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.current.unobserve(entry.target);
        setVisible(true);
      }
    });
  }, []);

  useEffect(() => {
    const target = elem.current;
    observer.current = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    observer.current.observe(target);

    return () => {
      if (observer.current) {
        observer.current.unobserve(target);
      }
    };
  }, [elem, handleIntersection]);

  return { visible };
};

export default useIntersection;
