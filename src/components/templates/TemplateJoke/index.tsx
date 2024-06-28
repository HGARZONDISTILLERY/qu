import { useState, FC } from 'react';
import { useQuery } from 'react-query';
import "./styles.css";

import { fetchJokesByType, fetchRandomDadJoke, fetchRandomJokes } from '../../../api';
import { DadJoke, Joke } from '../../../utils/types';
import { Box } from '@mui/material';
import ModalJoke from '../../molecules/ModalJoke';
import NavigationJoke from '../../organisms/NavigationJoke';
import SimplyCarouselJoke from '../../organisms/SimplyCarouselJoke';

const TemplateJoke: FC = () => {
  const [showDadJoke, setShowDadJoke] = useState(false)
  const [open, setOpen] = useState(false)
  const [categoryValue, setJokeCategoryValue] = useState<string>('')


  const handleClickOpen = () => {
    setOpen(true)
    setShowDadJoke(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowDadJoke(false);
  };

  const {
    data: randomJokeData,
    error: randomJokeError,
    isLoading: randomJokeIsLoading,
    refetch: randomJokeRefetch
  } = useQuery<Joke[]>('randomJokes', fetchRandomJokes, {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const {
    data: dadJokeData,
    error: dadJokeError,
    isLoading: dadJokeIsLoading,
    refetch: dadJokeRefetch,
  } = useQuery<DadJoke>('randomDadJoke', fetchRandomDadJoke);

  const {
    data: jokeByTypeData,
    error: jokeByTypeError,
    isLoading: jokeByTypeIsLoading,
    refetch: JokeByTypeRefetch
  } = useQuery<Joke[]>(['randomTypejokes', categoryValue], () => fetchJokesByType(categoryValue), {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: categoryValue !== '',
  });

  console.log('categoryValue', categoryValue)
  console.log('>>', categoryValue !== '')
  console.log('jokeByTypeData', jokeByTypeData)

  if (randomJokeIsLoading) return <div>Loading...</div>;

  const renderError = (error: unknown) => {
    if (error instanceof Error) return <div>Error fetching jokes: {error.message}</div>;
  }

  return (
    <>
      {renderError(randomJokeError)}
      <NavigationJoke 
        setJokeCategoryValue={setJokeCategoryValue}
        refetch={randomJokeRefetch}
        handleClickOpen={handleClickOpen}
        />
      <Box component="section" className="joke-category-section">
        <SimplyCarouselJoke
          randomJokeIsLoading={randomJokeIsLoading}
          randomJokeData={randomJokeData}
          />
        <ModalJoke
          showDadJoke={showDadJoke}
          dadJokeIsLoading={dadJokeIsLoading}
          renderError={renderError}
          dadJokeError={dadJokeError}
          open={open}
          handleClose={handleClose}
          dadJokeData={dadJokeData}
          dadJokeRefetch={dadJokeRefetch}
          />
      </Box>
    </>
  );
};

export default TemplateJoke;
