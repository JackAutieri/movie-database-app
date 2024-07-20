import axios from 'axios';

const API_KEY ="09664ca5c5a2e9ebb6f6e5a9f6cd0924"  //process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMoviesByQuery = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};
