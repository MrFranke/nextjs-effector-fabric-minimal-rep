import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as effectorReact from "effector-react/scope";
import { withEffector } from "nextjs-effector";
import "@shared/pages/shared.init";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withEffector(MyApp, { effectorReact });
