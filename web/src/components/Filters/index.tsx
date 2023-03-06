import { useState, useEffect } from "react";
import axios from "axios";

export default function Filters({
  setPlatformFilter,
}: {
  setPlatformFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [activePlatform, setActivePlatform] = useState<string>("todas");

  useEffect(() => {
    const userId = "18f882fc-5e4e-4b78-adb3-8104814ec8e4";

    const getPlatforms = async () => {
      const response = await axios
        .get(`http://localhost:3333/user/${userId}/platforms`)
        .then((response: any) => {
          if (!response.data) return;

          setPlatforms(response.data);
        });
    };

    getPlatforms();
  }, []);

  function handlePlatformClick(platform: string): void {
    setActivePlatform(platform);
    setPlatformFilter(platform);
  }

  return (
    <ul className="mt-6 mb-2 flex items-center">
      <li
        key="todas"
        onClick={() => handlePlatformClick("todas")}
        className={`py-1 px-2 hover:py-2 hover:px-3 rounded m-1 ease-in-out transition-all ${
          activePlatform === "todas"
            ? "bg-violet-700 text-white"
            : "bg-violet-300 text-violet-900 hover:bg-violet-400"
        }`}
      >
        <button type="button">todas</button>
      </li>

      {platforms.map((platform) => (
        <li
          key={platform}
          onClick={() => handlePlatformClick(platform)}
          className={`py-1 px-2 hover:py-2 hover:px-3 rounded m-1 ease-in-out transition-all ${
            activePlatform === platform
              ? "bg-violet-700 text-white"
              : "bg-violet-300 text-violet-900 hover:bg-violet-400"
          }`}
        >
          <button type="button">{platform}</button>
        </li>
      ))}
    </ul>
  );
}
