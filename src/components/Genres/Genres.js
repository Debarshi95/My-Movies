/* eslint-disable react/prop-types */
import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import { selectGenreList } from '../../store/selectors/homeSelector';
import { Creators } from '../../store/actions/commonActions';
import useMemoizedDispatch from '../../hooks/useMemoizedDispatch';
import LazyImage from '../LazyImage/LazyImage';
import './Genres.css';

function Genres({ type }) {
  const { data: genreList } = useSelector(selectGenreList);
  const dispatch = useMemoizedDispatch();

  useEffect(() => {
    const results = get(genreList, 'results');
    if (!results) {
      const { requestGetGenres } = Creators;
      dispatch(requestGetGenres());
    }
  }, [dispatch, genreList]);

  return (
    <div className="genres__root">
      <h3>Genres</h3>
      <div className="genres__row">
        {genreList?.results?.map(
          (item) =>
            item.type === type && (
              <Link to={`/genre/${item.name.toLowerCase()}`} className="genres__card" key={item.id}>
                <LazyImage
                  url={
                    item.poster_path
                      ? `${process.env.REACT_APP_POSTER_IMAGE}${item.poster_path}`
                      : '/assets/no_image.jpg'
                  }
                  alt={item.name}
                />
                <p className="genres__name">{item.name}</p>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default memo(Genres);
