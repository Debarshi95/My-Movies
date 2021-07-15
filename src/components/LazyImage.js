import React from "react";
import PropTypes from "prop-types";

function LazyImage({ alt, url, width, height }) {
  const ref = React.useRef();
  const ob = React.useRef();

  const handleIntersect = React.useCallback(
    function (entries) {
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

  return <img ref={ref} width={width || "100%"} height={height || "100%"} />;
}

LazyImage.propTypes = {
  alt: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string || PropTypes.number,
  height: PropTypes.string || PropTypes.number,
};

export default LazyImage;
