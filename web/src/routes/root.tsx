import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MagnifyingGlassPlus, GameController, User } from "phosphor-react";
import * as Dialog from "@radix-ui/react-alert-dialog";

import { TwitchGame, SavedGame } from "../types";
import { SelectedGameContext } from "../contexts/SelectedGameContext";
import SavedGameDialog from "../components/SaveGameDialog";

function Root() {
  const [selectedGame, setSelectedGame] = useState<
    TwitchGame | SavedGame | undefined
  >();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <div className="w-full h-screen flex flex-col bg-zinc-800">
      <div className="w-full grow overflow-auto">
        <SelectedGameContext.Provider value={{ selectedGame, setSelectedGame }}>
          <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
            <Outlet />
            <SavedGameDialog
              game={selectedGame}
              setOpenDialog={setOpenDialog}
            />
          </Dialog.Root>
        </SelectedGameContext.Provider>
      </div>

      <div className="w-full h-10 shrink-0 grid grid-flow-col bg-slate-500">
        <Link to={`search`} className="flex items-center justify-center">
          <MagnifyingGlassPlus
            className="text-white"
            size={32}
            alt="Search game"
          />
        </Link>
        <Link
          to="saved-games"
          className="flex items-center justify-center bg-emerald-500/50"
        >
          <GameController className="text-white" size={32} alt="Saved games" />
        </Link>
        <Link to="profile" className="flex items-center justify-center">
          <User className="text-white" size={32} alt="Profile" />
        </Link>
      </div>
    </div>
  );
}

export default Root;
