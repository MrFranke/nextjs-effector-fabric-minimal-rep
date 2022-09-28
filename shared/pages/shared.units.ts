import { createEvent, createStore, sample } from "effector";
import {
  ClientPageContext,
  isClientPageContext,
  isServerPageContext,
  ServerPageContext,
} from "nextjs-effector";
import { PageContext } from "nextjs-effector";

export const appStarted = createEvent<PageContext>();
export const appStartedOnServer = createEvent<ServerPageContext>();
export const appStartedOnClient = createEvent<ClientPageContext>();

export const appNavigatedOnClient = createEvent<string>();

export const $url = createStore<string | null>(null);
