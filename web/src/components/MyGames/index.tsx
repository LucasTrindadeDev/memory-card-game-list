import GameCard from "../GameCard";

import { TwitchGame } from "../../types";

function MyGames({ gameList }: { gameList: TwitchGame[] }) {
  return (
    <div className="mt-8 px-4">
      <h1 className="text-white font-bold text-2xl">My Games</h1>
      <ul className="my-4 grid grid-cols-2 gap-4 lg:grid-cols-6">
        {gameList.map((game: TwitchGame) => (
          <GameCard key={game.id} game={game} saved />
        ))}
      </ul>
    </div>
  );
}

export default MyGames;
