import GameCard from "../GameCard";

import { TwitchGame } from "../../types";

function SearchResults({ gameList }: { gameList: TwitchGame[] }) {
  return (
    <ul className="my-4 px-4 grid grid-cols-2 gap-4">
      {gameList.map((game: TwitchGame) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}

export default SearchResults;
