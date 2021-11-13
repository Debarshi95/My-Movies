import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Creators } from '../../store/actions/commonActions';
import routes from '../../utils/routes';
import './SearchBar.css';

function Searchbar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();

    const { requestGetSearchData } = Creators;
    if (query === '') return;
    dispatch(requestGetSearchData(query));
    history.push(routes.search.path);
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="searchbar__root">
      <input
        type="text"
        name="searchbar"
        placeholder="Search for a movie or show"
        autoComplete="off"
        onChange={handleChange}
      />
      <button type="button" onClick={handleSearch} className="searchbar__btnSearch">
        Search
      </button>
    </div>
  );
}

export default memo(Searchbar);
