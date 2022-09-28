import type { NextPage } from "next";
import { createGIP } from "../createGIP";
import { model } from "@shared/pages/nested.units";
import Link from "next/link";
import { $url } from "@shared/pages/shared.units";
import { useUnit } from "effector-react";

const Nested: NextPage = () => {
  const url = useUnit($url);
  console.log("in component state is", url);
  return (
    <div>
      <h1>Nested page: {url}</h1>
      <Link href={"/"}>home</Link>
    </div>
  );
};

Nested.getInitialProps = createGIP({
  pageEvent: model.pageLoaded,
});

export default Nested;
