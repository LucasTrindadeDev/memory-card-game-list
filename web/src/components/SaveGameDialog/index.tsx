import { useState } from "react";
import * as Dialog from "@radix-ui/react-alert-dialog";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

import { TwitchGame } from "../../types";

import GameStatus from "./GameStatus";
import PlatformSelect from "./PlatformSelect";

function SavedGameDialog({
  game,
  setOpenDialog,
}: {
  game: TwitchGame | undefined;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [gameStatus, setGameStatus] = useState<string>("quero-jogar");
  const [gamePlatform, setGamePlatform] = useState<string>("");

  // const navigate = useNavigate();

  async function handleSaveGame(): Promise<void> {
    if (game === undefined) return;

    const userId = "18f882fc-5e4e-4b78-adb3-8104814ec8e4";

    try {
      const response = await axios.post(
        `http://localhost:3333/user/${userId}/save-game`,
        {
          id: `${game.id}-${gamePlatform}`,
          name: game.name,
          box_art_url: game.box_art_url,
          status: gameStatus,
          platform: gamePlatform,
        }
      );

      setOpenDialog(false);
      setGameStatus("quero-jogar");
      setGamePlatform("");
      console.log("Jogo salvo com sucesso!");
      // navigate("/saved-games");
    } catch (err) {
      console.log(err);
      console.log("Erro ao salvar jogo :(");
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/80 inset-0 fixed z-[2]" />
      <Dialog.Content className="w-4/5 h-fit-content fixed z-[2] bg-[#2A2634] py-6 px-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25 flex flex-col justify-between">
        <Dialog.Title className="font-semibold text-2xl">
          Salvar jogo
        </Dialog.Title>

        <GameStatus updateStatus={setGameStatus} />

        <PlatformSelect updatePlatform={setGamePlatform} />

        <div className="flex items-center justify-end gap-4 mt-10">
          <Dialog.Cancel className="bg-gray-500 py-1 px-3 rounded flex justify-center items-center">
            Fechar
          </Dialog.Cancel>
          <button
            className="bg-violet-600 py-1 px-3 rounded flex justify-center items-center"
            type="submit"
            onClick={handleSaveGame}
          >
            Salvar
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default SavedGameDialog;
