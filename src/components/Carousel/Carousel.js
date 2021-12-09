import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { selectTrending } from '../../store/selectors/homeSelector';
import { Creators } from '../../store/actions/commonActions';
import SearchBar from '../SearchBar/SearchBar';
import useMemoizedDispatch from '../../hooks/useMemoizedDispatch';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

function Carousel({ type }) {
  const dispatch = useMemoizedDispatch();
  const data = useSelector(selectTrending);

  useEffect(() => {
    const { requestGetTrending } = Creators;
    if (!isEqual(type, data.itemType)) {
      dispatch(requestGetTrending(type));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, type]);

  return (
    <div className="bannerCarousel__root">
      <ResponsiveCarousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay
        transitionTime={2500}
        interval={4000}
      >
        {data?.data?.results?.map((item) => (
          <img
            key={item.id}
            src={`${process.env.REACT_APP_BACKDROP_IMAGE}/${item.backdrop_path}`}
            alt={item.title || item.name}
            loading="lazy"
          />
        ))}
      </ResponsiveCarousel>
      <div className="bannerCarousel__container">
        <h2>Dicover millions of movies & TV shows</h2>
        <SearchBar />
      </div>
    </div>
  );
}

Carousel.propTypes = {
  type: PropTypes.string.isRequired,
};
export default memo(Carousel);
