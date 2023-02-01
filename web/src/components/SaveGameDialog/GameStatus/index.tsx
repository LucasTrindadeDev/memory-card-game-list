import * as RadioGroup from "@radix-ui/react-radio-group";
import {
  GameController,
  ShoppingCart,
  CircleWavyCheck,
  Trophy,
} from "phosphor-react";

function GameStatus({
  status,
  updateStatus,
}: {
  status: string;
  updateStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <RadioGroup.Root
      onValueChange={(value) => updateStatus(value)}
      defaultValue={status}
      className="mt-6"
    >
      <h1 className="text-xl mb-4">Status do jogo</h1>

      <div className="flex items-center">
        <RadioGroup.Item
          value="quero-jogar"
          id="wishlist"
          className="bg-sky-500 w-5 h-5 rounded-full shadow-sm"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-black" />
        </RadioGroup.Item>
        <ShoppingCart size={24} className="text-sky-500 ml-2" />
        <label htmlFor="wishlist" className="text-xl text-sky-500 ml-1">
          Quero jogar
        </label>
      </div>

      <div className="flex items-center mt-4">
        <RadioGroup.Item
          value="jogando"
          id="playing"
          className="bg-red-500 w-5 h-5 rounded-full shadow-sm"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-black" />
        </RadioGroup.Item>
        <GameController size={24} className="text-red-500 ml-2" />
        <label htmlFor="playing" className="text-xl text-red-500 ml-1">
          Jogando
        </label>
      </div>

      <div className="flex items-center mt-4">
        <RadioGroup.Item
          value="finalizado"
          id="finished"
          className="bg-yellow-500 w-5 h-5 rounded-full shadow-sm"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-black" />
        </RadioGroup.Item>
        <CircleWavyCheck size={24} className="text-yellow-500 ml-2" />
        <label htmlFor="finished" className="text-xl text-yellow-500 ml-1">
          Finalizado
        </label>
      </div>

      <div className="flex items-center mt-4">
        <RadioGroup.Item
          value="platinado"
          id="platinum"
          className="bg-emerald-500 w-5 h-5 rounded-full shadow-sm"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-black" />
        </RadioGroup.Item>
        <Trophy size={24} className="text-emerald-500 ml-2" />
        <label htmlFor="platinum" className="text-xl text-emerald-500 ml-1">
          Platinado
        </label>
      </div>
    </RadioGroup.Root>
  );
}

export default GameStatus;
