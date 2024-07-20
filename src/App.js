// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import SearchForm from './components/SearchForm';
import { getMoviesByQuery } from './services/movieService';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    try {
      const data = await getMoviesByQuery(query);
      setMovies(data);
      setError('');
    } catch (error) {
      setError('An error occurred while fetching movie data.');
      setMovies([]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>Movie Database</h1>
        <SearchForm onSearch={handleSearch} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <MovieList movies={movies} />
      </div>
    </>
  );
}

export default App;
