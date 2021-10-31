import React from 'react';
import { Redirect } from 'react-router-dom';
import { TypeContext } from '../../providers/TypeProvider';
import useSearch from '../../hooks/useSearch';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = React.useState('');
  const ref = React.useRef('');
  const { type } = React.useContext(TypeContext);
  const { searchedData } = useSearch({ query, type });

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(ref.current.value);
    ref.current.value = '';
  };
  if (searchedData)
    return (
      <Redirect
        push
        to={{
          pathname: `/search`,
          search: `?query=${query}`,
          state: searchedData,
        }}
      />
    );

  return (
    <div className="searchBar">
      <input
        type="text"
        name="searchBar"
        placeholder="Search for a movie or show"
        ref={ref}
        autoComplete="off"
      />
      <button type="button" onClick={handleSearch} className="searchBar__btnSearch">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
