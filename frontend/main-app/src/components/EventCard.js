import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EventNotFound from '../assets/EventNotFound.png'

export default function EventCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin:0 }} variant="outlined">
      <CardMedia
        sx={{ height: 140, width: 140, marginX: 'auto' }}
        image={EventNotFound}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-3">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Join</Button>
        <Button size="small" component="a" href={props.link}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
