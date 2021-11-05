import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { useSelector } from 'react-redux';
import PosterCard from '../PosterCard/PosterCard';
import './Row.css';

function Row({ selector, title, action, type }) {
  const data = useSelector(selector);

  useEffect(() => {
    const isSameType = isEqual(type, data?.itemType);
    if (!isSameType) {
      action(type);
    }
  }, [action, data?.itemType, type]);

  return (
    <div className="row__root">
      <h3 className="row__title">{title}</h3>
      <div className="row__container">
        {data?.data?.results?.map((item) => (
          <PosterCard
            key={item.id}
            itemId={item.id}
            posterPath={item.poster_path}
            alt={item.title || item.name}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}
Row.propTypes = {
  selector: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

Row.whyDidYouRender = true;
export default memo(Row);
