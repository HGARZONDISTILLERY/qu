import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ReactSimplyCarousel from 'react-simply-carousel';

import "./styles.css";

import CardJoke from '../../molecules/CardJoke';
import { fetchRandomJokes } from '../../../api';
import { Joke } from '../../../utils/types';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Meme1 from '../../../assets/meme-1.jpg';
import Meme2 from '../../../assets/meme-2.jpeg';
import Meme3 from '../../../assets/meme-3.jpeg';
import Meme4 from '../../../assets/meme-4.jpeg';

const CarouselJoke: React.FC = () => {
  const [jokeCategory, setJokeCategory] = React.useState('');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [randomMeme, setRandomMeme] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setJokeCategory(event.target.value as string);
  };

  const { data, error, isLoading, refetch } = useQuery<Joke[]>('randomJokes', fetchRandomJokes, {
    staleTime: Infinity, // Datos nunca se consideran obsoletos
    cacheTime: Infinity, // Datos nunca se eliminan del cache
    refetchOnWindowFocus: false, // No hacer refetch cuando la ventana recupera el foco
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error fetching jokes: {error.message}</div>;

  const getRandomMeme = (): void => {
    const memes = [Meme1, Meme2, Meme3, Meme4];
    const randomIndex = Math.floor(Math.random() * memes.length);
    setRandomMeme(memes[randomIndex])
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="joke-category-select-label">Joke Category</InputLabel>
          <Select
            labelId="joke-category-select-label"
            id="joke-category-select"
            value={jokeCategory}
            label="Joke category"
            onChange={handleChange}
          >
            <MenuItem value={10}>General</MenuItem>
            <MenuItem value={20}>Knock-knock</MenuItem>
            <MenuItem value={30}>Programming</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <ReactSimplyCarousel
          onAfterChange={() => getRandomMeme()}
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
          delay={2}
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          {!isLoading && data?.slice(0, 4).map((joke) => (
            <CardJoke randomMeme={randomMeme} joke={joke} key={joke.id} />
          ))}
        </ReactSimplyCarousel>
      </Box>
      <Button variant="contained" onClick={() => refetch()}>Get New Jokes</Button>
    </>
  );
};

export default CarouselJoke;