import React from "react";
import { headers, IMAGE_URL, request, POSTER_SIZE } from "../config/config";
import "./Genres.css";
import { Link } from "react-router-dom";
import { TypeContext } from "../providers/TypeProvider";

function Genres() {
  const [genres, setGenres] = React.useState(null);
  const { type } = React.useContext(TypeContext);
  const _isMounted = React.useRef(false);

  React.useEffect(() => {
    _isMounted.current = true;
    const getGenres = async () => {
      const res = await fetch(request.getGenre(), headers);
      const data = await res.json();
      if (_isMounted.current) setGenres(data.genres[type]);
      return data;
    };
    getGenres();
    return () => (_isMounted.current = false);
  }, [type]);

  return (
    <div className="genres">
      <h2>Genres</h2>
      <div className="genres__row">
        {genres?.map((item) => (
          <Link
            to={`/genre/${item.name.toLowerCase()}`}
            className="genres__card"
            key={item.id}
          >
            <img
              src={`${IMAGE_URL}/${POSTER_SIZE}/${item.poster_path}`}
              alt={item.name}
              loading="lazy"
            />
            <p className="genres__name">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Genres;
