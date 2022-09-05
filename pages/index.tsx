import type { NextPage } from "next";
import { sample } from "effector";
import { useStore } from "effector-react";
import { createGIP } from "../createGIP";
import { pageLoaded, setFlag, $isFlag } from "@shared/pages/index.units";
import { model } from "@shared/pages/units";

sample({
  clock: pageLoaded,
  fn: () => true,
  target: setFlag,
});

const Home: NextPage = () => {
  const flag = useStore($isFlag);

  console.log("sid with exports:", $isFlag.sid);
  console.log("sid without exports", model.$isFlag.sid);

  return <div>flag: {flag ? "(true)" : "(false)"}</div>;
};

Home.getInitialProps = createGIP({
  pageEvent: pageLoaded,
});

export default Home;
