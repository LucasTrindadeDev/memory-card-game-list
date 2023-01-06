import { PlusCircle } from "phosphor-react";

import { TwitchGame } from "../../types";

function SavedGameCard({ game }: { game: TwitchGame }) {
  return (
    <div className="keen-slider__slide p-1">
      <div className="rounded border-zinc-900 border-4 overflow-hidden flex flex-col h-full">
        {/* Capa do jogo */}
        <div className="w-full aspect-square relative overflow-hidden">
          <img
            src={game.box_art_url.replace("52x72", "173x173")}
            className="w-full h-auto object-fill absolute"
          />
        </div>

        {/* Nome do Jogo */}
        <div className="w-full p-1 bg-zinc-900 flex justify-center items-center grow">
          <h4 className="text-white font-sans font-semibold text-sm text-center">
            {game.name}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SavedGameCard;
