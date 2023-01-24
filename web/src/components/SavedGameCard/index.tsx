import { SavedGame } from "../../types";
import GameStatus from "./GameStatus";

function SavedGameCard({ game }: { game: SavedGame }) {
  return (
    <div className="p-1">
      <div className="rounded border-zinc-900 border-4 overflow-hidden flex flex-col h-full relative">
        <GameStatus gameStatus={game.status} />

        <div className="w-full aspect-square relative overflow-hidden">
          <img
            src={game.cover.replace("52x72", "173x173")}
            className="w-full h-auto object-fill absolute"
          />
        </div>

        <div className="w-full p-1 bg-zinc-900 flex flex-col justify-between items-center grow">
          <h4 className="text-white font-sans font-semibold text-sm text-center">
            {game.name}
          </h4>
          <h5 className="text-slate-500">{game.platform}</h5>
        </div>
      </div>
    </div>
  );
}

export default SavedGameCard;
