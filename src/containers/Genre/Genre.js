import React from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import { getGenreId } from '../../util/helpers';
import { headers, request } from '../../config/config';
import { TypeContext } from '../../providers/TypeProvider';
import InfoCard from '../../components/InfoCard/InfoCard';
import './Genre.css';

function Genre() {
  const { name } = useParams();
  const [data, setData] = React.useState(null);
  const { type } = React.useContext(TypeContext);
  const isMounted = React.useRef(false);
  const [pageNumber, setPageNumber] = React.useState(1);

  React.useEffect(() => {
    isMounted.current = true;
    const getGenreData = async () => {
      const id = await getGenreId(type, name);
      const res = await fetch(request.getGenreData(id, type, pageNumber), {
        headers,
      });
      const resData = await res.json();
      if (isMounted.current) setData(resData);
      return resData;
    };
    getGenreData();
    return () => {
      isMounted.current = false;
      return isMounted;
    };
  }, [name, type, pageNumber]);

  const handlePageChange = ({ selected }) => setPageNumber(selected + 1);

  return (
    <div className="genre">
      <h2>{name}</h2>
      <div className="genre--row">
        {data?.results.map(
          (result) =>
            result.poster_path && result.backdrop_path && <InfoCard item={result} key={result.id} />
        )}
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="break-me"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={data?.total_pages}
        containerClassName="pagination"
        activeClassName="activeItem"
      />
    </div>
  );
}

export default Genre;
