import { Outlet, Link } from "react-router-dom";
import { MagnifyingGlassPlus, GameController, User } from "phosphor-react";

function Root() {
  return (
    <div className="w-full h-screen flex flex-col bg-zinc-800">
      <div className="w-full grow overflow-auto">
        <Outlet />
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
