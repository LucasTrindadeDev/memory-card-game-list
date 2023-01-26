import { useEffect, useState } from "react";
import axios from "axios";

import MyGames from "../components/MyGames";

import { SavedGame } from "../types";

function SavedGames() {
  const [savedGames, setSavedGames] = useState<SavedGame[]>([]);

  useEffect(() => {
    const userId = "18f882fc-5e4e-4b78-adb3-8104814ec8e4";
    axios(`http://localhost:3333/user/${userId}/saved-games`).then(
      (response) => {
        if (!response.data) return;

        setSavedGames(response.data);
      }
    );
  }, []);

  return (
    <div className="w-full">
      <MyGames gameList={savedGames} />
    </div>
  );
}

export default SavedGames;
