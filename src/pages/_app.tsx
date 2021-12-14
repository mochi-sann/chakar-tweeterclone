import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Lauout from "../Components/Lauout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Lauout>
        <Component {...pageProps} />
      </Lauout>
    </SessionProvider>
  );
}

export default MyApp;
