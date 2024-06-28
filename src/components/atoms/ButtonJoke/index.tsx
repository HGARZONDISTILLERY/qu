import React from 'react';
import Button from '@mui/material/Button';

interface ButtonJokeProps {
  onClick: () => void; // función de clic, no devuelve nada
  buttonText: string; // texto del botón
}

const ButtonJoke = ({ onClick, buttonText }: ButtonJokeProps) => {
  return (
    <Button
      sx={{
        backgroundColor: '#BA1102',
        '&:hover': {
          backgroundColor: '#D46401',
        },
      }}
      variant="contained"
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonJoke;
