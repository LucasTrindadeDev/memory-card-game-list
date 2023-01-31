import { createContext, useContext } from "react";

import { TwitchGame, SavedGame } from "../types";

export type SelectedGame = {
  selectedGame: TwitchGame | SavedGame | undefined;
  setSelectedGame: (game: TwitchGame | SavedGame) => void;
};

export const SelectedGameContext = createContext<SelectedGame>({
  selectedGame: undefined,
  setSelectedGame: () => {},
});

export const useSelectedGameContext = useContext(SelectedGameContext);
