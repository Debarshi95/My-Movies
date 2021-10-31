import React from 'react';
import { Link } from 'react-router-dom';
import { headers, IMAGE_URL, request, POSTER_SIZE } from '../../config/config';
import './Genres.css';
import { TypeContext } from '../../providers/TypeProvider';

function Genres() {
  const [genres, setGenres] = React.useState(null);
  const { type } = React.useContext(TypeContext);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;
    const getGenres = async () => {
      const res = await fetch(request.getGenre(), headers);
      const data = await res.json();
      if (isMounted.current) setGenres(data.genres[type]);
      return data;
    };
    getGenres();
    return () => {
      isMounted.current = false;
      return isMounted;
    };
  }, [type]);

  return (
    <div className="genres">
      <h2>Genres</h2>
      <div className="genres__row">
        {genres?.map((item) => (
          <Link to={`/genre/${item.name.toLowerCase()}`} className="genres__card" key={item.id}>
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
