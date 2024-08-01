import { Play } from "lucide-react";

export function PlayButton() {
  return (
    <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
      <Play fill="bg-black" />
    </button>
  );
}
