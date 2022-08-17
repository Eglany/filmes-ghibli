import { Typography } from '@mui/material';
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
    <Container sx={{ display: 'flex' }}>
      <Container
        sx={{
          width: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        disableGutters
      >
        <Box
          component="img"
          sx={{ width: '35vh' }}
          src={film.image}
          alt={film.title}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          {`${film.release_date} | ${film.running_time}min | score ${film.rt_score}/100`}
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3" disableGutters>
          {film.title}
        </Typography>
        <Typography variant="body2" disableGutters>
          {film.description}
        </Typography>
      </Container>
    </Container>
  );
}
