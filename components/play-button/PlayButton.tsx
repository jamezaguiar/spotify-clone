import { Play } from "lucide-react";

export function PlayButton() {
  return (
    <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black group-hover:visible">
      <Play fill="bg-black" />
    </button>
  );
}
