import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@client-app/components/Theme/ChakraTheme';
import NextNprogress from 'nextjs-progressbar';
import { ClientAPIProvider } from '@sample-nx/client-api';
import { NextAppProps } from '@client-app/interfaces/next';

function MyApp({ Component, pageProps }: NextAppProps): JSX.Element {
  const getLayout = Component?.layout ?? ((children: JSX.Element) => children);
  const page = getLayout(<Component {...pageProps} />);
  return (
    <ChakraProvider theme={theme}>
      <NextNprogress
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <ClientAPIProvider
        hydrate={pageProps.dehydratedState}
        endpoint={process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}
      >
        {page}
      </ClientAPIProvider>
    </ChakraProvider>
  );
}
export default MyApp;
