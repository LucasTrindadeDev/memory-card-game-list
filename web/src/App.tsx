import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-alert-dialog";
import axios from "axios";

import SearchGame from "./components/SearchGame";
import SearchResults from "./components/SearchResults";
import MyGames from "./components/MyGames";
import SaveGameDialog from "./components/SaveGameDialog";

import "./styles/main.css";

import { TwitchGame, SavedGame } from "./types";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<TwitchGame[]>([]);
  const [selectedGame, setSelectedGame] = useState<TwitchGame | undefined>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [savedGames, setSavedGames] = useState<SavedGame[]>([]);

  useEffect(() => {
    const userId = "18f882fc-5e4e-4b78-adb3-8104814ec8e4";
    axios(`http://localhost:3333/user/${userId}/saved-games`).then(
      (response) => {
        if (!response.data) return;

        setSavedGames(response.data);
      }
    );
  }, []);

  return (
    <div className="flex">
      <main className="w-screen min-h-screen bg-zinc-800">
        <SearchGame
          setSearchResults={setSearchResults}
          setIsLoading={setIsLoading}
        />

        <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
          <SearchResults
            isLoading={isLoading}
            gameList={searchResults}
            setSelectedGame={setSelectedGame}
          />

          <SaveGameDialog game={selectedGame} setOpenDialog={setOpenDialog} />
        </Dialog.Root>

        <MyGames gameList={savedGames} />
      </main>
    </div>
  );
}

export default App;
