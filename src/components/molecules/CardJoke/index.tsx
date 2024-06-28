import React from 'react';
import "./styles.css";

import { Joke } from '../../../utils/types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Meme1 from '../../../assets/meme-1.jpg';

interface CardJokeProps {
  joke: Joke;
}

const JokeListItem: React.FC<CardJokeProps> = ({ joke }) => {
  const card = (
    <Box className="joke-list-content" sx={{backgroundImage: `url('${Meme1}')`}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {joke.setup}
        </Typography>
        <Typography variant="h5">
        {joke.punchline}
        </Typography>
      </CardContent>
    </Box>
  );

  return (
    <Card sx={{ minWidth: 275, maxWidth: 500 }} variant="outlined">{card}</Card>
  );
};

export default JokeListItem;