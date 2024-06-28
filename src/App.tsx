import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './components/pages/Home';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Box } from '@mui/system';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Box className="App" component="main">
        <HelmetProvider>
          <Helmet>
            <link href="https://fonts.cdnfonts.com/css/cartoon-free" rel="stylesheet" />
          </Helmet>
        </HelmetProvider>
        <Home />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
