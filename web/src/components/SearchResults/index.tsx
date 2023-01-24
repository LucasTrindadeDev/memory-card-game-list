import GameCard from "../GameCard";

import loading from "../../assets/images/loading-pacman.svg";

import { TwitchGame } from "../../types";

function SearchResults({
  gameList,
  isLoading,
  setSelectedGame,
}: {
  gameList: TwitchGame[];
  isLoading: boolean;
  setSelectedGame: React.Dispatch<React.SetStateAction<TwitchGame | undefined>>;
}) {
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center m-5">
          <img className="w-20" alt="loading..." src={loading} />
        </div>
      ) : (
        <>
          <ul className="my-4 px-4 grid grid-cols-2 gap-4 lg:grid-cols-6">
            {gameList.map((game: TwitchGame) => (
              <GameCard
                key={game.id}
                game={game}
                setSelectedGame={setSelectedGame}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default SearchResults;
