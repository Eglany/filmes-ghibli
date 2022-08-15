import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CardFilm({ props: films }) {
  const {
    id, movie_banner: movieBanner, title, original_title: originalTitle,
  } = films;

  const navigate = useNavigate();

  const handleCLick = () => {
    console.log(id, title);
    navigate(`/film/${title}`, { params: { id } });
  };

  return (
    <Card id={id} sx={{ width: '35vh', my: '3vh' }}>
      <CardActionArea sx={{ height: '100%' }} onClick={handleCLick}>
        <CardMedia
          component="img"
          height="140"
          image={movieBanner}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {originalTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardFilm.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    movie_banner: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
  })).isRequired,

};
