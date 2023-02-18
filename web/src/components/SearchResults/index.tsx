import GameCard from "../GameCard";

import loading from "../../assets/images/loading-pacman.svg";

import { TwitchGame } from "../../types";

function SearchResults({
  gameList,
  isLoading,
}: {
  gameList: TwitchGame[];
  isLoading: boolean;
}) {
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center m-5">
          <img className="w-20" alt="loading..." src={loading} />
        </div>
      ) : (
        <>
          <ul className="my-4 px-4 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {gameList.map((game: TwitchGame) => (
              <GameCard key={game.id} game={game} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default SearchResults;
