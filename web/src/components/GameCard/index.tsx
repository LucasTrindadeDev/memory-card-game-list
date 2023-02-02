import { useContext, useEffect } from "react";

import { PlusCircle } from "phosphor-react";
import * as Dialog from "@radix-ui/react-alert-dialog";

import { AppContext } from "../../contexts/AppContext";
import { TwitchGame, SavedGame } from "../../types";
import GameStatus from "../GameStatus";

function GameCard({ game }: { game: TwitchGame | SavedGame }) {
  const { setSelectedGame } = useContext(AppContext);
  const { setOpenDialog } = useContext(AppContext);

  function handleSelectedGame(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    game: TwitchGame | SavedGame
  ) {
    e.preventDefault();
    setSelectedGame(game);

    setTimeout(() => {
      setOpenDialog(true), 1000;
    });
  }

  return (
    <div className="rounded border-zinc-900 border-4 overflow-hidden flex flex-col relative">
      {"status" in game ? (
        <Dialog.Trigger onClick={(e) => handleSelectedGame(e, game)}>
          <GameStatus gameStatus={game.status} />
        </Dialog.Trigger>
      ) : (
        <Dialog.Trigger
          className="w-8 h-8 absolute top-[-2px] right-[-2px] z-[1] flex justify-center items-center bg-gray-600 rounded-bl-lg"
          onClick={(e) => handleSelectedGame(e, game)}
        >
          <PlusCircle className="text-white" size={24} />
        </Dialog.Trigger>
      )}

      <div className="w-full aspect-square relative overflow-hidden">
        <img
          src={game.box_art_url.replace("52x72", "173x173")}
          className="w-full h-auto object-fill absolute"
        />
      </div>

      <div className="w-full p-1 bg-zinc-900 flex flex-col justify-center items-center grow">
        <h4 className="text-white font-sans font-semibold text-sm text-center">
          {game.name}
        </h4>
        {"platform" in game && (
          <h5 className="text-slate-500">{game.platform}</h5>
        )}
      </div>
    </div>
  );
}

export default GameCard;
