export interface Joke {
  type: JokeType;
  setup: string;
  punchline: string;
  id: number;
  votes?: number;
}

export type JokeType = 'programming' | 'general' | 'knock-knock';

export interface DadJoke {
  id: string;
  joke: string;
  status: number;
}
