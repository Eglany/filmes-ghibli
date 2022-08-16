import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import replaceWhiteSpace from '../utils/replaceWhiteSpace';

export default function CardFilm({ props: films }) {
  const {
    id, image, title, original_title: originalTitle,
  } = films;

  const navigate = useNavigate();

  const handleCLick = () => {
    navigate(`/film/${replaceWhiteSpace(title)}`, { state: { id } });
  };

  return (
    <Card id={id} sx={{ width: '35vh', my: '3vh' }}>
      <CardActionArea sx={{ height: '100%' }} onClick={handleCLick}>
        <CardMedia
          component="img"
          height="auto"
          image={image}
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
  props: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
  })).isRequired,

};
