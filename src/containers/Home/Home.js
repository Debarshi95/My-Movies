import React, { memo } from 'react';
import { injectSaga } from 'redux-injectors';
import { compose } from 'redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import homeSaga from '../../store/sagas/homeSaga';
import Carousel from '../../components/Carousel/Carousel';
import Genres from '../../components/Genres/Genres';
import Row from '../../components/Row/Row';
import { Creators } from '../../store/actions/commonActions';
import {
  selectPopular,
  selectTopRated,
  selectUpcomingMovies,
  selectUpcomingShows,
} from '../../store/selectors/homeSelector';
import './Home.css';

function Home() {
  const { pathname } = useLocation();
  const itemType = pathname.split('/')[1] || 'movie';

  const dispatch = useDispatch();
  const {
    requestGetPopular,
    requestGetTopRated,
    requestGetUpcomingMovies,
    requestGetUpcomingShows,
  } = Creators;

  return (
    <div className="home">
      <Carousel type={itemType} />
      <div className="home__container">
        <Genres type={itemType} />
        <Row
          title="Popular"
          type={itemType}
          selector={selectPopular}
          action={() => dispatch(requestGetPopular(itemType))}
        />
        <Row
          title="Top Rated"
          type={itemType}
          selector={selectTopRated}
          action={() => dispatch(requestGetTopRated(itemType))}
        />
        {itemType === 'movie' ? (
          <Row
            title="Upcoming"
            type={itemType}
            selector={selectUpcomingMovies}
            action={() => dispatch(requestGetUpcomingMovies())}
          />
        ) : (
          <Row
            title="On The Air"
            type={itemType}
            selector={selectUpcomingShows}
            action={() => dispatch(requestGetUpcomingShows())}
          />
        )}
      </div>
    </div>
  );
}

Home.whyDidYouRender = true;
export default compose(memo, injectSaga({ key: 'home', saga: homeSaga }))(Home);
