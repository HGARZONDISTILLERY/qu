import axios from 'axios';
import { JOKES_API_URL } from '../utils/constants';
import { Joke } from '../utils/types';

export const fetchRandomJokes = async (): Promise<Joke[]> => {
  try {
    const randomTenUrl = `${JOKES_API_URL}/jokes/ten`
    const response = await axios.get<Joke[]>(randomTenUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching jokes:', error);
    throw error;
  }
};
