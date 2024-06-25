import React from 'react';
import { Joke } from '../../../utils/types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

interface CardJokeProps {
  joke: Joke;
}

const JokeListItem: React.FC<CardJokeProps> = ({ joke }) => {
  console.log('joke', joke)
  const card = (
    <React.Fragment>
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
    </React.Fragment>
  );

  return (
    <li>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </li>
  );
};

export default JokeListItem;