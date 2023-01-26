import { useState } from "react";
import * as Dialog from "@radix-ui/react-alert-dialog";

import SearchGame from "../components/SearchGame";
import SearchResults from "../components/SearchResults";
import SaveGameDialog from "../components/SaveGameDialog";

import { TwitchGame } from "../types";

function Search() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<TwitchGame[]>([]);
  const [selectedGame, setSelectedGame] = useState<TwitchGame | undefined>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <div className="w-full">
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
    </div>
  );
}

export default Search;
