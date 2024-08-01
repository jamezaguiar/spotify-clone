import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlayButton } from "../play-button/PlayButton";

type SmallPlaylistProps = {
  cover: string;
  title: string;
  href: string;
};

export function SmallPlaylist({ cover, title, href }: SmallPlaylistProps) {
  return (
    <Link
      href={href}
      className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
    >
      <Image src={cover} alt={`${title} cover`} width={104} height={104} />
      <strong>{title}</strong>
      <PlayButton />
    </Link>
  );
}
