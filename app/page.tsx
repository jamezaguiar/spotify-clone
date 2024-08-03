import { CardPlaylist } from "@/components/card-playlist/CardPlaylist";
import { RoundedButton } from "@/components/rounded-button/RoundedButton";
import { SmallPlaylist } from "@/components/small-playlist/SmallPlaylist";
import { DUMMY_ALBUMS } from "@/dummy-data/albums";
import { getTimeOfDay } from "@/utils/dateUtils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4">
        <RoundedButton>
          <ChevronLeft />
        </RoundedButton>
        <RoundedButton>
          <ChevronRight />
        </RoundedButton>
      </div>
      <h1 className="mt-10 text-3xl font-semibold">Good {getTimeOfDay()}</h1>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {DUMMY_ALBUMS.map(({ cover, href, title }) => (
          <SmallPlaylist key={title} cover={cover} href={href} title={title} />
        ))}
      </div>
      <h2 className="mt-10 text-2xl font-semibold">Made for you</h2>
      <div className="mt-4 grid grid-cols-8 gap-4">
        {DUMMY_ALBUMS.map(({ cover, href, title, description }) => (
          <CardPlaylist
            key={title}
            cover={cover}
            href={href}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
