import { DUMMY_ALBUMS } from "@/dummy-data/albums";
import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const playingNow = DUMMY_ALBUMS[0];

  return (
    <footer className="flex items-center justify-between border-t border-zinc-700 bg-zinc-800 px-6 py-4">
      <div className="flex items-center gap-3">
        <Image
          src={playingNow.cover}
          alt={playingNow.title}
          width={56}
          height={56}
        />
        <div className="flex flex-col">
          <strong className="font-normal">{playingNow.title}</strong>
          <span className="text-xs text-zinc-400">{playingNow.artist}</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white pl-0.5 text-black">
            <Play fill="bg-black" />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
