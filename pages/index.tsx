import type { NextPage } from "next";
import { sample } from "effector";
import { useStore } from "effector-react";
import { createGIP } from "../createGIP";
import { pageFactory } from "../pageFactory";

const { pageLoaded, $isFlag, setFlag } = pageFactory();

sample({
  clock: pageLoaded,
  fn: () => true,
  target: setFlag,
});

const Home: NextPage = () => {
  const flag = useStore($isFlag);
  console.log("sid:", $isFlag.sid);
  return <div>flag: {flag ? "(true)" : "(false)"}</div>;
};

Home.getInitialProps = createGIP({
  pageEvent: pageLoaded,
});

export default Home;
