import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { AppProvider } from "../hooks/AppProvider";

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  globalStyles();
  return (
    <AppProvider>
      <main>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
