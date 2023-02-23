import * as Toast from "@radix-ui/react-toast";
import { Heart, X, Ghost } from "phosphor-react";

function ToastMessage({
  status,
  title,
  openToast,
  setOpenToast,
}: {
  status: string;
  title: string;
  openToast: boolean;
  setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const bgColors: { [char: string]: string } = {
    success: "#0E9F6E",
    error: "#E02424",
  };

  return (
    <Toast.Root
      open={openToast}
      onOpenChange={setOpenToast}
      className="fixed flex items-center bottom-14 right-4 px-3 py-1 text-white"
      style={{ backgroundColor: bgColors[status] }}
    >
      {status === "success" ? (
        <Heart size={20} className="mr-1" />
      ) : (
        <Ghost size={20} className="mr-1" />
      )}

      <Toast.Title className="text-xl flex">{title}</Toast.Title>
      <Toast.Close className="self-start mt-1 ml-4">
        <X size={16} className="text-sm" />
      </Toast.Close>
    </Toast.Root>
  );
}

export default ToastMessage;
