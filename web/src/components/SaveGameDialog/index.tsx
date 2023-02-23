import { useState, useContext, useEffect } from "react";
import * as Dialog from "@radix-ui/react-alert-dialog";
import axios from "axios";

import { AppContext } from "../../contexts/AppContext";
import { TwitchGame, SavedGame } from "../../types";

import GameStatus from "./game-status";
import PlatformSelect from "./platform-select";
import ToastMessage from "./toast-message";

function SavedGameDialog({
  game,
}: {
  game: TwitchGame | SavedGame | undefined;
}) {
  const { selectedGame, setSelectedGame } = useContext(AppContext);
  const { setOpenDialog } = useContext(AppContext);
  const [openToast, setOpenToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastStatus, setToastStatus] = useState("");

  const edit = selectedGame && "status" in selectedGame;

  const [gameStatus, setGameStatus] = useState<string>("quero-jogar");
  const [gamePlatform, setGamePlatform] = useState<string>("");

  useEffect(() => {
    if (selectedGame && "status" in selectedGame) {
      setGameStatus(selectedGame.status);
      setGamePlatform(selectedGame.platform);
    }
  }, [selectedGame]);

  const resetDialog = (): void => {
    setOpenDialog(false);
    setSelectedGame(undefined);
    setGameStatus("quero-jogar");
    setGamePlatform("");
  };

  const handleOpenToast = (title: string, status: string): void => {
    resetDialog();
    setToastTitle(title);
    setToastStatus(status);
    setOpenToast(true);
  };

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
      handleOpenToast("Jogo salvo com sucesso!", "success");
    } catch (err: any) {
      if (err.response.data === "GAME ALREADY SAVED") {
        handleOpenToast("Jogo já salvo!", "error");
      } else {
        handleOpenToast("Erro ao salvar jogo :(", "error");
      }
    }
  }

  async function handleEditGame(): Promise<void> {
    if (game === undefined) return;

    const userId = "18f882fc-5e4e-4b78-adb3-8104814ec8e4";

    try {
      const response = await axios.put(
        `http://localhost:3333/user/${userId}/saved-games/${game.id}`,
        {
          status: gameStatus,
        }
      );
      handleOpenToast("Jogo editado com sucesso!", "success");
    } catch (err) {
      console.log(err);
      handleOpenToast("Erro ao editar jogo :(", "error");
    }
  }

  async function handleDeleteGame(): Promise<void> {
    if (game === undefined) return;

    const userId = "18f882fc-5e4e-4b78-adb3-8104814ec8e4";

    try {
      const response = await axios.delete(
        `http://localhost:3333/user/${userId}/saved-games/${game.id}`
      );
      handleOpenToast("Jogo deletado com sucesso!", "success");
    } catch (err) {
      console.log(err);
      handleOpenToast("Erro ao deletar jogo :(", "error");
    }
  }

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/80 inset-0 fixed z-[2]" />
        <Dialog.Content className="w-4/5 h-fit-content fixed z-[2] bg-[#2A2634] py-6 px-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25 flex flex-col justify-between">
          <Dialog.Title className="font-semibold text-2xl">
            {edit ? "Editar jogo" : "Salvar jogo"}
          </Dialog.Title>

          <GameStatus status={gameStatus} updateStatus={setGameStatus} />

          <PlatformSelect
            platform={gamePlatform}
            updatePlatform={setGamePlatform}
            disabled={edit ? true : false}
          />

          <div className="flex items-center justify-end gap-4 mt-10">
            {edit && (
              <button
                type="button"
                onClick={() => handleDeleteGame()}
                className="bg-red-500 py-1 px-3 rounded flex justify-center items-center"
              >
                Deletar jogo
              </button>
            )}

            <Dialog.Cancel
              onClick={() => resetDialog()}
              className="bg-gray-500 py-1 px-3 rounded flex justify-center items-center"
            >
              Fechar
            </Dialog.Cancel>

            <button
              className="bg-violet-600 py-1 px-3 rounded flex justify-center items-center"
              type="submit"
              onClick={edit ? handleEditGame : handleSaveGame}
            >
              Salvar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>

      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title={toastTitle}
        status={toastStatus}
      />
    </>
  );
}

export default SavedGameDialog;
