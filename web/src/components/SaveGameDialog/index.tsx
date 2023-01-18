import { useState } from "react";
import * as Dialog from "@radix-ui/react-alert-dialog";

import GameStatus from "./GameStatus";
import PlatformSelect from "./PlatformSelect";

function SavedGameDialog({ setOpenDialog }: { setOpenDialog: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [gameStatus, setGameStatus] = useState<string>("");
  const [gamePlatform, setGamePlatform] = useState<string>("");

  function handleSaveGame(): void {
    console.log(gameStatus, gamePlatform);

    if (gameStatus === "") return;

    setOpenDialog(false);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/80 inset-0 fixed z-[2]" />
      <Dialog.Content className="w-4/5 h-fit-content fixed z-[2] bg-[#2A2634] py-6 px-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25 flex flex-col justify-between">
        {/* Título do modal */}
        <Dialog.Title className="font-semibold text-2xl">
          Salvar jogo
        </Dialog.Title>

        {/* Status do jogo */}
        <GameStatus updateStatus={setGameStatus} />

        {/* Select da plataforma */}
        <PlatformSelect updatePlatform={setGamePlatform} />

        {/* Botões de Fechar e Salvar */}
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
