import Image from "next/image";
import Link from "next/link";

type CardPlaylistProps = {
  href: string;
  title: string;
  description: string;
  cover: string;
};

export function CardPlaylist({
  href,
  title,
  description,
  cover,
}: CardPlaylistProps) {
  return (
    <Link
      className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      href={href}
    >
      <Image
        src={cover}
        alt={title}
        className="w-full"
        width={120}
        height={120}
      />
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm line-clamp-2 text-zinc-400">{description}</span>
    </Link>
  );
}
