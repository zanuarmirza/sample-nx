import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
const queryClient = new QueryClient();

export interface ProviderConfigProps {
  rqDevtool?: boolean;
  hydrate?: unknown;
  endpoint: string;
}

export const config: { endpoint: string } = { endpoint: '' };

export const ClientAPIProvider: React.FC<ProviderConfigProps> = ({
  children,
  rqDevtool,
  hydrate,
  endpoint,
}) => {
  config.endpoint = endpoint;
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={hydrate}>{children}</Hydrate>
      {rqDevtool && <ReactQueryDevtools initialIsOpen />}
    </QueryClientProvider>
  );
};
