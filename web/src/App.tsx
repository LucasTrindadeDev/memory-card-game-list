import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-alert-dialog";

import SearchGame from "./components/SearchGame";
import SearchResults from "./components/SearchResults";
import MyGames from "./components/MyGames";
import SaveGameDialog from "./components/SaveGameDialog";

import "./styles/main.css";

import { TwitchGame } from "./types";

import savedGames from "./saved-games";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<TwitchGame[]>([]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div className="flex">
      <main className="w-screen min-h-screen bg-zinc-800">
        <SearchGame
          setSearchResults={setSearchResults}
          setIsLoading={setIsLoading}
        />

        <Dialog.Root>
          <SearchResults isLoading={isLoading} gameList={searchResults} />

          <SaveGameDialog />
        </Dialog.Root>

        <MyGames gameList={savedGames} />
      </main>
    </div>
  );
}

export default App;
