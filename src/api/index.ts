import axios from 'axios';
import { DAD_JOKE_API_URL, JOKES_API_URL } from '../utils/constants';
import { DadJoke, Joke, JokeType } from '../utils/types';
import { randomIntFromInterval } from '../utils';

export const fetchRandomJokes = async (): Promise<Joke[]> => {
  try {
    const randomTenUrl = `${JOKES_API_URL}/jokes/ten`
    const response = await axios.get<Joke[]>(randomTenUrl);
    const responseExtended = response.data.map(joke => ({
      ...joke,
      votes: randomIntFromInterval(1, 100),
    }));
    console.log('responseExtended', responseExtended)
    return responseExtended;
  } catch (error) {
    console.error('Error fetching jokes:', error);
    throw error;
  }
};

export const fetchJokesByType = async (type: string): Promise<Joke[]> => {
  const JOKES_API_BY_TYPE_URL = `${JOKES_API_URL}jokes/${type.toLowerCase()}/ten`;

  try {
    const response = await axios.get<Joke[]>(JOKES_API_BY_TYPE_URL);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${type} jokes:`, error);
    throw error;
  }
};

export const fetchRandomDadJoke = async (): Promise<DadJoke> => {
  try {
    const response = await axios.get<DadJoke>(DAD_JOKE_API_URL, {
      headers: { Accept: 'application/json' }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching dad joke:', error);
    throw error;
  }
};
