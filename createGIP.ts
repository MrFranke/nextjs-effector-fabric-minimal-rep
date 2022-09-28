import { appStarted } from "@shared/pages/shared.units";
import { createGIPFactory } from "nextjs-effector";

export const createGIP = createGIPFactory({
  sharedEvents: [appStarted],
});
