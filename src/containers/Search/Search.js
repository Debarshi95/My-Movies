import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredSearch } from '../../store/selectors/homeSelector';
import PosterCard from '../../components/PosterCard/PosterCard';
import './Search.css';

function Search() {
  const data = useSelector(selectFilteredSearch);

  return (
    <div className="search__root">
      <div className="search__row">
        {data.length ? (
          data.map((item) => (
            <PosterCard
              posterPath={item.poster_path}
              key={item.id}
              itemId={item.id}
              type={item.media_type}
              alt={item.title || item.name}
              variant="primary"
              widthMax
            />
          ))
        ) : (
          <div className="search__message">
            <h2>No resource found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
