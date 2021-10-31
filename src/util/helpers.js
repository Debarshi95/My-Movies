import languages from '../data/languages.json';

export const makeLanguageFromIso = (iso) => {
  const lang = languages.find((language) => language.code === iso);
  return lang;
};
export const formatBudget = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
};

export const getGenreId = async (type, name) => {
  const res = await fetch('/assets/movie_genres.json');
  const data = await res.json();
  const genre = data.genres[type].find((g) => g.name.toLowerCase() === name);
  return genre.id;
};
