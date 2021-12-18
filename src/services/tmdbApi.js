import generateApiClient from '../utils/generateClient';

const tmbdApi = generateApiClient(process.env.REACT_APP_TMBD_URL);
const genreApi = generateApiClient(process.env.REACT_APP_PUBLIC_URL);

// Common end points for both Movies and Shows based on "type" paramter.

export const getPopular = (type = 'movie') => tmbdApi.get(`/${type}/popular`);

export const getTrendingThisWeek = (type = 'all') => tmbdApi.get(`/trending/${type}/week`);

export const getTopRated = (type = 'movie') => tmbdApi.get(`/${type}/top_rated`);

export const getRecommendations = (id, type) => tmbdApi.get(`/${type}/${id}/recommendations`);

export const getGenreData = (type, id, pageNo) =>
  tmbdApi.get(`/discover/${type}?with_genres=${id}&page=${pageNo}`);

export const getSearchData = (query) => tmbdApi.get(`/search/multi?query=${query}`);

export const getItemInfo = (id, type) => tmbdApi.get(`/${type}/${id}`);

export const getSimilar = (id, type) => tmbdApi.get(`/${type}/${id}/similar`);

// Movies

export const getUpcomingMovies = () => tmbdApi.get('/movie/upcoming');

export const getCollection = (id) => tmbdApi.get(`/collection/${id}`);

// Genres
export const getGenres = () => genreApi.get('/assets/movie_genres.json');

// Shows
export const getOnTheAirShows = () => tmbdApi.get('/tv/on_the_air');
