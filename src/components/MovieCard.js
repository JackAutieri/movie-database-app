// src/components/MovieCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin: 0;
  color: #fff;
`;

const ReleaseDate = styled.p`
  font-size: 0.9em;
  color: #ccc;
`;

const MovieCard = ({ movie }) => (
  <Card>
    <Poster
      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={movie.title}
    />
    <Info>
      <Title>{movie.title}</Title>
      <ReleaseDate>{movie.release_date}</ReleaseDate>
    </Info>
  </Card>
);

export default MovieCard;
