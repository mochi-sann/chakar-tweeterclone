import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../Components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../lib/Theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
