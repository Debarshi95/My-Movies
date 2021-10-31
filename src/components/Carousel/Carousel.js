import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { BACKDROP_SIZE, IMAGE_URL, request } from '../../config/config';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import { TypeContext } from '../../providers/TypeProvider';
import ToggleType from '../ToggleType/ToggleType';
import useRequest from '../../hooks/useRequest';
import SearchBar from '../SearchBar/SearchBar';
import LazyImage from '../LazyImage/LazyImage';

function Carousel() {
  const { type } = React.useContext(TypeContext);

  const { apiData } = useRequest({
    url: request.getTrendingThisWeek(type),
  });

  return (
    <div className="bannerCarousel">
      <ResponsiveCarousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        transitionTime={2000}
        interval={3000}
      >
        {apiData?.results.map((data) => (
          <div className="bannerCarousel__card" key={data.id}>
            <LazyImage
              url={`${IMAGE_URL}/${BACKDROP_SIZE}/${data.backdrop_path}`}
              alt={data.title || data.name}
              height="100%"
            />
          </div>
        ))}
      </ResponsiveCarousel>
      <div className="bannerCarousel__message">
        <h2>Dicover millions of movies & TV shows</h2>
        <SearchBar />
      </div>
      <ToggleType />
    </div>
  );
}
export default Carousel;
