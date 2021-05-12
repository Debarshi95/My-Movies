import React from "react";
import { Carousel } from "react-responsive-carousel";
import { BACKDROP_SIZE, IMAGE_URL } from "../config/config";
import { request } from "../config/config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BannerCarousel.css";
import { TypeContext } from "../providers/TypeProvider";
import ToggleType from "./ToggleType";
import useRequest from "../hooks/useRequest";
import SearchBar from "./SearchBar";

export default function BannerCarousel() {
  const { type } = React.useContext(TypeContext);

  const { apiData } = useRequest({
    url: request.getTrendingThisWeek(type),
  });

  return (
    <div className="bannerCarousel">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={2000}
        interval={3000}
      >
        {apiData?.results.map((data) => (
          <div className="bannerCarousel__card" key={data.id}>
            <img
              src={`${IMAGE_URL}/${BACKDROP_SIZE}/${data.backdrop_path}`}
              alt={data.title || data.name}
            />
          </div>
        ))}
      </Carousel>
      <div className="bannerCarousel__message">
        <h2>Dicover millions of movies & TV shows</h2>
        <SearchBar />
      </div>
      <ToggleType />
    </div>
  );
}
