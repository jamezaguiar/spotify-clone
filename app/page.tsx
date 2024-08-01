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
      <h1 className="font-semibold text-3xl mt-10">Good {getTimeOfDay()}</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {DUMMY_ALBUMS.map(({ cover, href, title }) => (
          <SmallPlaylist key={title} cover={cover} href={href} title={title} />
        ))}
      </div>
      <h2 className="font-semibold text-2xl mt-10">Made for you</h2>
      <div className="grid grid-cols-8 gap-4 mt-4">
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
