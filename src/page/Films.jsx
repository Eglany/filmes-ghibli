import React, { useState, useEffect } from 'react';
import CardFilm from '../components/CardFilm';
import fetchGhibli from '../utils/fetchAPI';

export default function Films() {
  const [films, setFilms] = useState([]);

  const ghibliAPI = async () => {
    const fetch = await fetchGhibli('films');
    const data = await fetch.json();
    setFilms(data);
  };

  useEffect(() => {
    ghibliAPI();
  }, []);

  return (
    <section>
      {films.map((film) => (
        <CardFilm key={film.id} props={film} />
      ))}
    </section>
  );
}
