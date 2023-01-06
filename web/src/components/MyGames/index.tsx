import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import SavedGameCard from "../SavedGameCard";

import { TwitchGame } from "../../types";

function MyGames({ gameList }: { gameList: TwitchGame[] }) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 2.5,
      },
    },
    []
  );

  return (
    <div className="mt-8 px-4">
      <h1 className="text-white font-bold text-2xl">My Games</h1>
      <ul ref={sliderRef} className="keen-slider my-4 flex">
        {gameList.map((game: TwitchGame) => (
          <SavedGameCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default MyGames;
