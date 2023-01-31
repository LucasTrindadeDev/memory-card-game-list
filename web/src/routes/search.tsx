import { useState } from "react";

import SearchGame from "../components/SearchGame";
import SearchResults from "../components/SearchResults";

import { TwitchGame } from "../types";

function Search() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<TwitchGame[]>([]);

  return (
    <div className="w-full">
      <SearchGame
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
      />

      <SearchResults isLoading={isLoading} gameList={searchResults} />
    </div>
  );
}

export default Search;
