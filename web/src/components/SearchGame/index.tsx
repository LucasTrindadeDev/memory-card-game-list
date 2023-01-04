import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import axios from "axios";

import { TwitchGame } from "../../types";

type FormData = {
  searchQuery: string;
};

function SearchGame({
  setSearchResults,
}: {
  setSearchResults: React.Dispatch<React.SetStateAction<TwitchGame[]>>;
}) {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TWITCH_ACCESS_TOKEN}`,
        "Client-Id": import.meta.env.VITE_TWITCH_CLIENT_ID,
      },
      params: {
        query: data.searchQuery,
      },
    };

    axios
      .get("https://api.twitch.tv/helix/search/categories", config)
      .then((response) => {
        setSearchResults(response.data.data);
      });
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col px-4 mt-9">
        <label className="mb-2 text-white">Procurar jogo</label>
        <div className="relative">
          <input
            className="w-full h-8 rounded px-2 py-1 pr-10"
            placeholder="Nome do jogo"
            {...register("searchQuery")}
          />
          <MagnifyingGlass className="absolute right-2 top-1 z-[1]" size={24} />
        </div>
      </div>
    </form>
  );
}

export default SearchGame;
