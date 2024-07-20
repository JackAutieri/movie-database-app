// src/components/MovieList.js
import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const MovieList = ({ movies }) => (
  <ListContainer>
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </ListContainer>
);

export default MovieList;
