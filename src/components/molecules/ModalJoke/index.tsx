import { FC } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography, useMediaQuery, useTheme } from '@mui/material';

interface ModalJokeProps {
  showDadJoke: boolean;
  dadJokeIsLoading: boolean;
  renderError: (error: any) => React.ReactNode;
  dadJokeError?: any;
  open: boolean;
  handleClose: () => void;
  dadJokeData?: { joke: string };
  dadJokeRefetch: () => void;
}

const ModalJoke: FC<ModalJokeProps> = ({
  showDadJoke,
  dadJokeIsLoading,
  renderError,
  dadJokeError,
  open,
  handleClose,
  dadJokeData,
  dadJokeRefetch,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {showDadJoke && !dadJokeIsLoading && (
        <>
          {renderError(dadJokeError)}
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogContent sx={{width: '400px'}}>
              <DialogContentText>
                  <strong>{dadJokeData?.joke}</strong>
              </DialogContentText>
              <Typography 
                  sx={{
                    textAlign: 'center',
                    marginTop: '15px',
                    color: 'gray'
                  }}
                  component="h4">
                    Purum pum pshhh!!!!
                </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Close
              </Button>
              <Button autoFocus onClick={dadJokeRefetch}>
                Refresh
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default ModalJoke;