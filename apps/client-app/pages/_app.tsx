import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@client-app/components/Theme/ChakraTheme';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import {ClientAPIProvider} from '@sample-nx/client-api'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NextNprogress
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <ClientAPIProvider hydrate={pageProps.dehydratedState} endpoint={process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}>
            <Component {...pageProps} />
        </ClientAPIProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
