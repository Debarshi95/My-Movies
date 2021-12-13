import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import { injectReducer, injectSaga } from 'redux-injectors';
import { selectGenreData } from '../../store/selectors/genreSelector';
import useMemoizedDispatch from '../../hooks/useMemoizedDispatch';
import { Creators } from '../../store/actions/commonActions';
import genreReducer from '../../store/reducers/genreReducer';
import genreSaga from '../../store/sagas/genreSaga';
import PosterCard from '../../components/PosterCard/PosterCard';
import './Genre.css';

function Genre() {
  const { name } = useParams();
  const data = useSelector(selectGenreData);
  const dispatch = useMemoizedDispatch();

  useEffect(() => {
    const { requestGetGenreData } = Creators;
    dispatch(requestGetGenreData(1, name));
  }, [dispatch, name]);

  return (
    <div className="genre__root">
      <h3>{name}</h3>
      <div className="genre__row">
        {data?.results?.map((item) => (
          <PosterCard
            key={item.id}
            posterPath={item.poster_path}
            alt={item.title || item.name}
            type={data.type}
            itemId={item.id}
            variant="primary"
            widthMax
          />
        ))}
      </div>
    </div>
  );
}

export default compose(
  injectReducer({ key: 'genre', reducer: genreReducer }),
  injectSaga({ key: 'genre', saga: genreSaga })
)(Genre);
