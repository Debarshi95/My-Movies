import React from 'react';
import PropTypes from 'prop-types';

function LazyImage({ alt, url, width, height }) {
  const ref = React.useRef();
  const ob = React.useRef();

  const handleIntersect = React.useCallback(
    (entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          ref.current.src = url;
          ref.current.alt = alt;
          ob.current.unobserve(entry.target);
        }
      });
    },
    [url, alt]
  );

  React.useEffect(() => {
    ob.current = new IntersectionObserver(handleIntersect);
    ob.current.observe(ref.current);
  }, [handleIntersect]);

  return <img ref={ref} width={width || '100%'} height={height || '100%'} alt="" />;
}

LazyImage.propTypes = {
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.arrayOf([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.arrayOf([PropTypes.string, PropTypes.number]).isRequired,
};

export default LazyImage;
