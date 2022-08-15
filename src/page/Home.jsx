import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import CardFilm from '../components/CardFilm';
import Header from '../components/Header';
import fetchGhibli from '../utils/fetchAPI';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchGhibli('films').then((data) => setFilms(data));
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }} disableGutters>
        {films.map((film) => (
          <CardFilm key={film.id} props={film} />
        ))}
      </Container>
    </>
  );
}
