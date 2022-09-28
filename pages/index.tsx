import type { NextPage } from "next";
import { createGIP } from "../createGIP";
import { model } from "@shared/pages/index.units";
import Link from "next/link";
import { useUnit } from "effector-react";
import { $url } from "@shared/pages/shared.units";

const Home: NextPage = () => {
  const url = useUnit($url);
  console.log("in component state is", url);

  return (
    <div>
      <h1>Home: {url}</h1>
      <Link href={"/nested"}>nested</Link>
    </div>
  );
};

Home.getInitialProps = createGIP({
  pageEvent: model.pageLoaded,
});

export default Home;
