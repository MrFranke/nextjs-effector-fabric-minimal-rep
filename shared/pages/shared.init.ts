import Router from "next/router";
import { sample } from "effector";
import { isClientPageContext, isServerPageContext } from "nextjs-effector";
import {
  $url,
  appNavigatedOnClient,
  appStarted,
  appStartedOnClient,
  appStartedOnServer,
} from "./shared.units";

sample({
  clock: appStarted,
  filter: isServerPageContext,
  target: appStartedOnServer,
});

sample({
  clock: appStarted,
  filter: isClientPageContext,
  target: appStartedOnClient,
});

sample({
  clock: appStartedOnServer,
  fn: (ctx) => ctx.asPath!,
  target: $url,
});

sample({
  clock: appNavigatedOnClient,
  target: $url,
});

Router.events.on("routeChangeStart", (path) => {
  console.log("run event with path:", path);
  appNavigatedOnClient(path);
});

$url.watch((state) => console.log("$url state is", state));
