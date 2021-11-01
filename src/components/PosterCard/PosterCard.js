import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMAGE_URL, POSTER_SIZE } from '../../config/config';
import { TypeContext } from '../../providers/TypeProvider';
import './PosterCard.css';
import LazyImage from '../LazyImage/LazyImage';

function PosterCard({ item }) {
  const { type } = React.useContext(TypeContext);
  const poster = item.profile_path || item.poster_path;

  return (
    <div className="posterCard">
      <Link to={`/${type}/${item.id}`} className={item.credit_id ? `disable-link` : null}>
        <LazyImage
          url={poster ? `${IMAGE_URL}/${POSTER_SIZE}${poster}` : '/assets/no_image.jpg'}
          alt={item.title || item.name}
          height="100%"
        />
      </Link>
      {item.credit_id && <p className="posterCard__castName">{item.name}</p>}
    </div>
  );
}

PosterCard.defaultProps = {
  item: {},
};

PosterCard.propTypes = {
  item: PropTypes.shape({
    profile_path: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.string,
    credit_id: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }),
};
export default PosterCard;
