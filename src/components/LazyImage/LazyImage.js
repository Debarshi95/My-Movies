import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useIntersection from '../../hooks/useIntersection';
import './LazyImage.css';

function LazyImage({ url, width, height }) {
  const ref = useRef(null);
  const { visible } = useIntersection(ref);

  return (
    <div ref={ref} className="lazyImage__root">
      {visible && <img width={width} height={height} src={url} alt="" />}
    </div>
  );
}

LazyImage.defaultProps = {
  width: '100%',
  height: '100%',
};

LazyImage.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LazyImage;
