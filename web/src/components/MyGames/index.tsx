import * as Tabs from "@radix-ui/react-tabs";

import SavedGameCard from "../SavedGameCard";

import { SavedGame } from "../../types";

function MyGames({ gameList }: { gameList: SavedGame[] }) {
  const statusList = ["quero-jogar", "jogando", "finalizado", "platinado"];
  const statusLabel: { [status: string]: string } = {
    "quero-jogar": "Quero jogar",
    jogando: "Jogando",
    finalizado: "Finalizado",
    platinado: "Platinado",
  };

  return (
    <div className="mt-2 px-2">
      <h1 className="text-white font-bold text-2xl">Meus jogos</h1>

      <Tabs.Root
        defaultValue="quero-jogar"
        className="flex flex-col w-full mt-6"
      >
        <Tabs.List className="shrink-0 flex">
          {statusList.map((status: string) => {
            return (
              <Tabs.Trigger
                key={status}
                value={status}
                className="flex justify-center items-center px-2 py-1 bg-violet-400 text-sm border-r-violet-600 border-r-2 last:border-r-0"
              >
                {statusLabel[status]}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
        {statusList.map((status: string) => {
          return (
            <Tabs.Content value={status} key={status}>
              <ul className="my-4 grid grid-cols-2">
                {gameList
                  .filter((game: SavedGame) => {
                    return game.status === status;
                  })
                  .map((game: SavedGame) => (
                    <SavedGameCard key={game.id} game={game} />
                  ))}
              </ul>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </div>
  );
}

export default MyGames;
