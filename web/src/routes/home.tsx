import { useEffect, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import axios from "axios";
import {
  Books,
  GameController,
  ShoppingCart,
  CircleWavyCheck,
  Trophy,
} from "phosphor-react";

import GameCard from "../components/GameCard";
import Filters from "../components/Filters";

import { SavedGame, Status, TwitchGame } from "../types";

export default function Home() {
  const statusList = [
    {
      name: "quero-jogar",
      label: "Quero jogar",
      element: <ShoppingCart className="text-white" size={24} />,
    },
    {
      name: "biblioteca",
      label: "Na biblioteca",
      element: <Books className="text-white" size={24} />,
    },
    {
      name: "jogando",
      label: "Jogando",
      element: <GameController className="text-white" size={24} />,
    },
    {
      name: "finalizado",
      label: "Finalizado",
      element: <CircleWavyCheck className="text-white" size={24} />,
    },
    {
      name: "platinado",
      label: "Platinado",
      element: <Trophy className="text-white" size={24} />,
    },
  ];

  const [numResults, setNumResults] = useState<number>(10);
  const [activeStatus, setActiveStatus] = useState<string>("quero-jogar");
  const [gameList, setGameList] = useState<SavedGame[]>([]);
  const [platformFilter, setPlatformFilter] = useState<string>("todas");

  useEffect(() => {
    loadGames();
  }, [activeStatus]);

  useEffect(() => {
    console.log(platformFilter);
  }, [platformFilter]);

  async function loadGames() {
    const userId = "18f882fc-5e4e-4b78-adb3-8104814ec8e4";

    const response = await axios
      .post(`http://localhost:3333/user/${userId}/saved-games`, {
        status: activeStatus,
        take: numResults,
      })
      .then((response) => {
        if (!response.data.games) return;

        if (gameList.length === 0) {
          setGameList(response.data.games);
        } else {
          setGameList((gameList) => gameList.concat(response.data.games));
        }
      });
  }

  function handleTabClick(status: string) {
    setActiveStatus(status);
  }

  return (
    <div className="mt-2 px-2">
      <h1 className="text-white font-bold text-2xl">Meus jogos</h1>

      <Tabs.Root
        defaultValue="quero-jogar"
        className="flex flex-col w-full mt-6"
      >
        <Tabs.List className="shrink-0 flex">
          {statusList.map((status: Status) => {
            return (
              <Tabs.Trigger
                key={status.name}
                value={status.name}
                className={`flex gap-2 justify-center items-center px-2 py-1 bg-violet-400 border-r-violet-600 border-r-2 last:border-r-0 ${
                  activeStatus === status.name ? "bg-violet-600" : ""
                }`}
                onClick={() => handleTabClick(status.name)}
              >
                {status.element}
                {activeStatus === status.name && (
                  <h5 className="text-md text-white">{status.label}</h5>
                )}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
        {statusList.map((status: Status) => {
          return (
            <Tabs.Content
              value={status.name}
              key={status.name}
              className="flex flex-col"
            >
              <Filters setPlatformFilter={setPlatformFilter} />

              <ul className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {gameList
                  .filter((game: SavedGame) => {
                    return game.status === status.name;
                  })
                  .map((game: SavedGame) => (
                    <GameCard key={game.id} game={game} />
                  ))}
              </ul>

              <button
                type="button"
                className="bg-violet-500 text-white rounded-lg py-2 px-3 self-center my-10"
                onClick={() => loadGames()}
              >
                Carregar mais
              </button>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </div>
  );
}
