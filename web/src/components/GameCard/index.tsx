import { TwitchGame } from "../../types";

function GameCard({ game }: { game: TwitchGame }) {
  return (
    <div className="rounded overflow-hidden flex flex-col">
      <img
        src={game.box_art_url.replace("52x72", "200x200")}
        className="w-full aspect-square object-cover"
      />
      <div className="w-full p-1 bg-orange-400 flex justify-center items-center grow">
        <h4 className="text-blue-600 text-center">{game.name}</h4>
      </div>
    </div>
  );
}

export default GameCard;
