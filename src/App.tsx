import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './components/pages/Home';
import {Helmet} from "react-helmet";
import { Box } from '@mui/system';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Box className="App" component="main">
        <Helmet>
          <link href="https://fonts.cdnfonts.com/css/cartoon-free" rel="stylesheet" />
        </Helmet>

        <Home />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
