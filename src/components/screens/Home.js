import React from "react";
import BannerCarousel from "../BannerCarousel";
import Genres from "../Genres";
import Row from "../Row";
import { request } from "../../config/config";
import "./Home.css";
import { TypeContext } from "../../providers/TypeProvider";
import withRow from "../hoc/withRow";

function Home() {
  const { type } = React.useContext(TypeContext);
  const RowComp = withRow(Row);
  return (
    <div className="home">
      <BannerCarousel />
      <div className="home__wrapper">
        <Genres />
        <RowComp url={request.getPopular(type)} title="Popular" />
        <RowComp url={request.getTopRated(type)} title="Most Rated" />
        {type === "movie" ? (
          <>
            <RowComp url={request.getNowPlayingMovies()} title="Now Playing" />
            <RowComp url={request.getUpComingMovies()} title="Upcoming" />
          </>
        ) : null}

        {type === "tv" ? (
          <>
            <RowComp url={request.getAiringToday()} title="Airing Today" />
            <RowComp url={request.getOnTheAir()} title="On The Air" />
          </>
        ) : null}
      </div>
    </div>
  );
}
export default Home;
