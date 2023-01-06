import * as Dialog from "@radix-ui/react-alert-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { TwitchGame } from "../../types";

function SavedGameDialog() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/80 inset-0 fixed z-[2]" />
      <Dialog.Content className="w-4/5 h-1/2 fixed z-[2] bg-[#2A2634] py-6 px-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <Dialog.Title className="font-semibold text-2xl">
          Salvar jogo
        </Dialog.Title>

        <div>
          <RadioGroup.Root>
            <RadioGroup.Item value="Quero jogar" id="wishlist">
              <RadioGroup.Indicator />
            </RadioGroup.Item>

            <RadioGroup.Item value="Jogando" id="playing">
              <RadioGroup.Indicator />
            </RadioGroup.Item>

            <RadioGroup.Item value="Finalizado" id="finished">
              <RadioGroup.Indicator />
            </RadioGroup.Item>
          </RadioGroup.Root>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default SavedGameDialog;
