import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';

const queryClient = new QueryClient();

const customRender = (ui, options) =>
  render(ui, { wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>, ...options });

export * from '@testing-library/react';
export { customRender as render };
