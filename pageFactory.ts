import { createEvent, createStore, sample } from "effector";
import { PageContext } from "nextjs-effector";

export const pageFactory = () => {
  const pageLoaded = createEvent<PageContext>();
  const $isFlag = createStore<boolean>(false);
  const setFlag = createEvent<boolean>();

  sample({
    clock: setFlag,
    target: $isFlag,
  });

  return {
    pageLoaded,
    $isFlag,
    setFlag,
  };
};
