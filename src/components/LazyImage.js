import React from "react";
import PropTypes from "prop-types";

function LazyImage({ alt, url, width, height }) {
  const ref = React.useRef();
  const ob = React.useRef();
  React.useEffect(() => {
    ob.current = new IntersectionObserver(handleIntersect);
    ob.current.observe(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        ref.current.src = url;
        ob.current.unobserve(entry.target);
      }
    });
  }
  return <img ref={ref} width={width || "100%"} height={height} alt={alt} />;
}

LazyImage.propTypes = {
  alt: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string || PropTypes.number,
  height: PropTypes.string || PropTypes.number,
};

export default LazyImage;
