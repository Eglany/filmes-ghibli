import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchGhibli from '../utils/fetchAPI';

export default function Film() {
  const [film, setFilm] = useState({});
  const { state } = useLocation();

  useEffect(() => {
    fetchGhibli(`films/${state.id}`).then((data) => setFilm(data));
  });

  return (
    <Container>
      <Box
        component="img"
        sx={{ width: '45vh' }}
        src={film.image}
        alt={film.title}
      />
    </Container>
  );
}
