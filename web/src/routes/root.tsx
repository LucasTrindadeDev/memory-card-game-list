import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MagnifyingGlassPlus, GameController, User } from "phosphor-react";
import * as Dialog from "@radix-ui/react-alert-dialog";
import * as Toast from "@radix-ui/react-toast";

import { TwitchGame, SavedGame } from "../types";
import { AppContext } from "../contexts/AppContext";
import SavedGameDialog from "../components/SaveGameDialog";

function Root() {
  const [selectedGame, setSelectedGame] = useState<
    TwitchGame | SavedGame | undefined
  >();

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col bg-zinc-800">
      <div className="w-full grow overflow-auto">
        <AppContext.Provider
          value={{ selectedGame, setSelectedGame, openDialog, setOpenDialog }}
        >
          <Toast.Provider>
            <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
              <Outlet />
              <SavedGameDialog game={selectedGame} />
            </Dialog.Root>

            <Toast.Viewport />
          </Toast.Provider>
        </AppContext.Provider>
      </div>

      <div className="w-full h-10 shrink-0 grid grid-flow-col bg-slate-500">
        <Link to="search" className="flex items-center justify-center">
          <MagnifyingGlassPlus
            className="text-white"
            size={32}
            alt="Search game"
          />
        </Link>
        <Link
          to="/"
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
