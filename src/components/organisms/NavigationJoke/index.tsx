import { FC } from 'react';
import "./styles.css";

import { Autocomplete, Box, Button, FormControl, Grid, TextField, } from '@mui/material';
import ButtonJoke from '../../atoms/ButtonJoke';

const NavigationJoke: FC<{
  setJokeCategoryValue: (value: string) => void;
  refetch: () => void;
  handleClickOpen: () => void;
}> = ({ setJokeCategoryValue, refetch, handleClickOpen }) => {
  const jokeTypeList = ['Programming', 'General', 'Knock-knock'];

  return (
    <Box component="nav" className="joke-category-nav">
      <FormControl className="joke-category-form">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              disableClearable
              id="random-joke-select"
              options={jokeTypeList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Filter by joke type..." />}
              onChange={(event, newValue) => {
                setJokeCategoryValue(String(newValue));
              }}
            />
          </Grid>
          <Grid item xs={3}>
          <ButtonJoke
            onClick={() => {
              setJokeCategoryValue('')
              refetch()
            }}
            buttonText="Get New Jokes"
          />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="text"
              onClick={handleClickOpen}>
              Get a special dad joke
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default NavigationJoke
