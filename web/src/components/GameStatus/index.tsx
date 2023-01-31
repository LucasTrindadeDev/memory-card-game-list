import {
  GameController,
  ShoppingCart,
  CircleWavyCheck,
  Trophy,
} from "phosphor-react";

function GameStatus({ gameStatus }: { gameStatus: string }) {
  const colors: { [status: string]: string } = {
    "quero-jogar": "bg-sky-500",
    jogando: "bg-red-500",
    finalizado: "bg-yellow-500",
    platinado: "bg-emerald-500",
  };

  function badgeIcon() {
    switch (gameStatus) {
      case "jogando":
        return <GameController className="text-white" size={24} />;
      case "finalizado":
        return <CircleWavyCheck className="text-white" size={24} />;
      case "platinado":
        return <Trophy className="text-white" size={24} />;
      default:
        return <ShoppingCart className="text-white" size={24} />;
    }
  }

  return (
    <div
      className={`w-8 h-8 absolute top-[-2px] right-[-2px] z-[1] flex justify-center items-center ${colors[gameStatus]} rounded-bl-lg`}
    >
      {badgeIcon()}
    </div>
  );
}

export default GameStatus;
