// import "keen-slider/keen-slider.min.css";
// import { useKeenSlider } from "keen-slider/react";

import SavedGameCard from "../SavedGameCard";

import { SavedGame } from "../../types";

function MyGames({ gameList }: { gameList: SavedGame[] }) {
  // const [sliderRef, instanceRef] = useKeenSlider(
  //   {
  //     slides: {
  //       perView: 2.5,
  //     },
  //   },
  //   []
  // );

  return (
    <div className="mt-2 px-2">
      <h1 className="text-white font-bold text-2xl">Meus jogos</h1>
      {/* <ul ref={sliderRef} className="keen-slider my-4">
        {gameList.map((game: SavedGame) => (
          <SavedGameCard key={game.id} game={game} />
        ))}
      </ul> */}
      <ul className="my-4 grid grid-cols-2">
        {gameList.map((game: SavedGame) => (
          <SavedGameCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default MyGames;
