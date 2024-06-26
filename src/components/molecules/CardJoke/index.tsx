import React from 'react';
import "./styles.css";

import { Joke } from '../../../utils/types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface CardJokeProps {
  joke: Joke;
  randomMeme: string;
}

const JokeListItem: React.FC<CardJokeProps> = ({ joke, randomMeme }) => {
  const card = (
    <Box className="joke-list-content" sx={{backgroundImage: `url('${randomMeme}')`}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {joke.setup}
        </Typography>
        <Typography variant="h5" component="div">
        {joke.punchline}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{joke.type}</Button>
      </CardActions>
    </Box>
  );

  return (
    <Card sx={{ minWidth: 275, maxWidth: 500 }} variant="outlined">{card}</Card>
  );
};

export default JokeListItem;