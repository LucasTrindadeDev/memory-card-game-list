import React from "react";
import * as Select from "@radix-ui/react-select";

function PlatformSelect({
  updatePlatform,
}: {
  updatePlatform: React.Dispatch<React.SetStateAction<string>>;
}) {
  const SelectItem = ({ name, value }: { name: string; value: string }) => {
    return (
      <Select.Item
        className="text-violet-400 rounded flex items-center p-2"
        value={value}
        key={value}
      >
        <Select.ItemText>{name}</Select.ItemText>
        {/* <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator> */}
      </Select.Item>
    );
  };

  return (
    <div className="mt-10">
      <h1 className="text-xl mb-4">Plataforma</h1>

      <Select.Root onValueChange={(value) => updatePlatform(value)}>
        <Select.Trigger
          className="flex items-center rounded py-3 px-4 h-6 w-full gap-1 bg-violet-500 hover:bg-violet-700 shadow-sm focus:shadow-lg placeholder:text-violet-100 placeholder:font-normal text-white font-semibold"
          aria-label="Platform"
        >
          <Select.Value placeholder="Escolha uma plataforma" />
          {/* <Select.Icon /> */}
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="absolute left-1/2 -translate-x-1/2 w-4/5 h-fit-content z-[4] overflow-hidden bg-violet-800 rounded-md shadow-sm">
            <Select.ScrollUpButton />
            <Select.Viewport className="p-2">
              {/* Consoles da Nintendo */}
              <Select.Group>
                <Select.Label className="text-violet-200 text-sm">
                  Nintendo
                </Select.Label>
                <SelectItem name="Switch" value="switch" />
                <SelectItem name="Wii U" value="wiiu" />
                <SelectItem name="Wii" value="wii" />
                <SelectItem name="3DS" value="3ds" />
                <SelectItem name="DS" value="ds" />
                <SelectItem name="Gamecube" value="gamecube" />
                <SelectItem name="N64" value="n64" />
                <SelectItem name="Game Boy Advance" value="gba" />
                <SelectItem name="Game Boy Color" value="gbc" />
                <SelectItem name="Game Boy" value="gbc" />
                <SelectItem name="SNES" value="snes" />
                <SelectItem name="NES" value="nes" />
              </Select.Group>

              <Select.Separator className="h-[1px] bg-violet-500 my-2" />

              {/* Consoles da Sony */}
              <Select.Group>
                <Select.Label className="text-violet-200 text-sm">
                  Sony
                </Select.Label>
                <SelectItem name="PlayStation 5" value="ps5" />
                <SelectItem name="PlayStation 4" value="ps4" />
                <SelectItem name="PlayStation 3" value="ps3" />
                <SelectItem name="PlayStation 2" value="ps2" />
                <SelectItem name="PlayStation" value="ps1" />
                <SelectItem name="PS Vita" value="ps-vita" />
                <SelectItem name="PSP" value="psp" />
              </Select.Group>

              <Select.Separator className="h-[1px] bg-violet-500 my-2" />

              {/* Consoles da Microsoft */}
              <Select.Group className="text-violet-200 text-sm">
                <Select.Label>Microsoft</Select.Label>
                <SelectItem name="Xbox Series S/X" value="xbox-series" />
                <SelectItem name="Xbox One" value="xbox-one" />
                <SelectItem name="Xbox 360" value="xbox-360" />
                <SelectItem name="Xbox" value="xbox" />
              </Select.Group>

              <Select.Separator className="h-[1px] bg-violet-500 my-2" />

              {/* Outras plataformas */}
              <Select.Group className="text-violet-200 text-sm">
                <SelectItem name="PC" value="pc" />
                <SelectItem name="iOS" value="ios" />
                <SelectItem name="Android" value="android" />
                <SelectItem name="Dreamcast" value="dreamcast" />
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

export default PlatformSelect;
