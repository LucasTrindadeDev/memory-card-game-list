import { createContext } from "react";

import { TwitchGame, SavedGame } from "../types";

export type App = {
  selectedGame: TwitchGame | SavedGame | undefined;
  setSelectedGame: (game: TwitchGame | SavedGame | undefined) => void;
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
};

export const AppContext = createContext<App>({
  selectedGame: undefined,
  setSelectedGame: () => {},
  openDialog: false,
  setOpenDialog: () => {},
});
