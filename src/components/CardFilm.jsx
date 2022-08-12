import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function CardFilm({ props }) {
  const {
    id, movie_banner: movieBanner, title, description,
  } = props;
  return (
    <Card id={id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={movieBanner}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

CardFilm.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.string,
  ).isRequired,
  id: PropTypes.string.isRequired,
  movie_banner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
