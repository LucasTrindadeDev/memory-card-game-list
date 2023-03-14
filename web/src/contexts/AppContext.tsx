import { createContext } from "react";

import { UserI, TwitchGame, SavedGame } from "../types";

export type App = {
  user: UserI | undefined;
  setUser: (user: UserI) => void;
  selectedGame: TwitchGame | SavedGame | undefined;
  setSelectedGame: (game: TwitchGame | SavedGame | undefined) => void;
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
};

export const AppContext = createContext<App>({
  user: undefined,
  setUser: () => {},
  selectedGame: undefined,
  setSelectedGame: () => {},
  openDialog: false,
  setOpenDialog: () => {},
});
