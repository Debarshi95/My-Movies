import React from 'react';
import { useLocation } from 'react-router-dom';
import { TypeContext } from '../../providers/TypeProvider';
import InfoCard from '../../components/InfoCard/InfoCard';
import './Search.css';

function Search() {
  const { type } = React.useContext(TypeContext);
  const { state } = useLocation();

  return (
    <div className="searchItem">
      {state?.length === 0 && (
        <p className="searchItem__notFound">
          There are no {`${type === 'tv' ? `show` : type}`} that matched your query.
        </p>
      )}

      {state?.length > 0 && state?.map((item) => <InfoCard item={item} key={item.id} />)}
    </div>
  );
}

export default Search;
