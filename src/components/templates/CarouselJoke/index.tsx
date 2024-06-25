import React from 'react';
import { useQuery } from 'react-query';
import CardJoke from '../../molecules/CardJoke';
import { fetchRandomJokes } from '../../../api';
import { Joke } from '../../../utils/types';

const CarouselJoke: React.FC = () => {
  const { data, error, isLoading } = useQuery<Joke[]>('randomJokes', fetchRandomJokes);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error fetching jokes: {error.message}</div>;

  console.log('data', data)

  return (
    <>
      <ul>
        {!isLoading && data?.slice(0, 4).map((joke) => (
          <CardJoke joke={joke} key={joke.id} />
        ))}
      </ul>
    </>
  );
};

export default CarouselJoke;