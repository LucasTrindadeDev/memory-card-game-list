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

import { SavedGame } from "../types";

interface Status {
  name: string;
  label: string;
  element: JSX.Element;
}

function SavedGames() {
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

  const [activeStatus, setActiveStatus] = useState<string>("quero-jogar");
  const [gameList, setGameList] = useState<SavedGame[]>([]);

  useEffect(() => {
    const userId = "18f882fc-5e4e-4b78-adb3-8104814ec8e4";

    const loadGames = async () => {
      const response = await axios
        .post(`http://localhost:3333/user/${userId}/saved-games`, {
          status: activeStatus,
        })
        .then((response) => {
          if (!response.data) return;

          setGameList(response.data);
        });
    };

    loadGames();
  }, [activeStatus]);

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
            <Tabs.Content value={status.name} key={status.name}>
              <ul className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {gameList
                  .filter((game: SavedGame) => {
                    return game.status === status.name;
                  })
                  .map((game: SavedGame) => (
                    <GameCard key={game.id} game={game} />
                  ))}
              </ul>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </div>
  );
}

export default SavedGames;
