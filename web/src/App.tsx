import { useEffect, useState } from "react";

import SearchGame from "./components/SearchGame";
import SearchResults from "./components/SearchResults";

import "./styles/main.css";

import { TwitchGame } from "./types";

function App() {
  const [searchResults, setSearchResults] = useState<TwitchGame[]>([]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div className="w-[100vw] min-h-[100vh] flex">
      <main className="w-full h-full bg-zinc-800">
        <SearchGame setSearchResults={setSearchResults} />

        {searchResults.length > 0 && <SearchResults gameList={searchResults} />}
      </main>
    </div>
  );
}

export default App;
