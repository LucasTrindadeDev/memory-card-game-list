import { PlusCircle } from "phosphor-react";
import * as Dialog from "@radix-ui/react-alert-dialog";

import { TwitchGame } from "../../types";

function GameCard({ game }: { game: TwitchGame }) {

  return (
    <div className="rounded border-zinc-900 border-4 overflow-hidden flex flex-col relative">
      {/* Botão de adicionar aos jogos salvos */}
      <Dialog.Trigger className="w-8 h-8 absolute top-[-2px] right-[-2px] z-[1] flex justify-center items-center bg-gray-600 rounded-bl-lg">
        <PlusCircle className="text-white" size={24} />
      </Dialog.Trigger>

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
  );
}

export default GameCard;
