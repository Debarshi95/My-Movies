const BASE_URL = 'https://api.themoviedb.org/3';

const IMAGE_URL = 'https://image.tmdb.org/t/p';

const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  'Content-Type': 'application/json',
};

const POSTER_SIZE = 'w500';
const BACKDROP_SIZE = 'w1280';
const request = {
  getNowPlayingMovies: () => `${BASE_URL}/movie/now_playing`,
  getUpComingMovies: () => `${BASE_URL}/movie/upcoming`,
  getAiringToday: () => `${BASE_URL}/tv/airing_today`,
  getOnTheAir: () => `${BASE_URL}/tv/on_the_air`,
  getPopular: (type) => `${BASE_URL}/${type}/popular`,
  getTopRated: (type) => `${BASE_URL}/${type}/top_rated`,
  getTrendingThisWeek: (type) => `${BASE_URL}/trending/${type}/week`,
  getGenre: () => `./assets/movie_genres.json`,
  getCollection: (id) => `${BASE_URL}/collection/${id}`,
  getItemData: (id, type) => `${BASE_URL}/${type}/${id}`,
  getSimilar: (id, type) => `${BASE_URL}/${type}/${id}/similar`,
  getRecommendations: (id, type) => `${BASE_URL}/${type}/${id}/recommendations`,
  getGenreData: (id, type, pageNo) =>
    `${BASE_URL}/discover/${type}?with_genres=${id}&page=${pageNo}`,
  getCast: (type, id) => `${BASE_URL}/${type}/${id}/credits`,
  searchItem: (query, type) => `${BASE_URL}/search/${type}?query=${query}`,
};

export { IMAGE_URL, headers, request, POSTER_SIZE, BACKDROP_SIZE };
