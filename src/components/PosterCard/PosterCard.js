import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LazyImage from '../LazyImage/LazyImage';
import './PosterCard.css';

function PosterCard({ alt, posterPath, type, itemId, variant, widthMax }) {
  return (
    <Link
      to={`/${type}/${itemId}`}
      className={`posterCard posterCard--${variant} ${widthMax && 'posterCard--maxWidth'}`}
    >
      <div className="posterCard__item">
        <LazyImage
          url={
            posterPath
              ? `${process.env.REACT_APP_POSTER_IMAGE}${posterPath}`
              : '/assets/no_image.jpg'
          }
          alt={alt}
        />
      </div>
    </Link>
  );
}

PosterCard.defaultProps = {
  posterPath: null,
  alt: '',
  variant: 'primary',
  widthMax: false,
};
PosterCard.propTypes = {
  alt: PropTypes.string,
  posterPath: PropTypes.string,
  type: PropTypes.string.isRequired,
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  variant: PropTypes.string,
  widthMax: PropTypes.bool,
};
export default memo(PosterCard);
