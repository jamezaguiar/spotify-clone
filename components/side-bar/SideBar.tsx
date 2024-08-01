import { Home, Library, Search } from "lucide-react";
import { NavLink } from "../nav-link/NavLink";

export function SideBar() {
  return (
    <aside className="w-64 bg-zinc-950 p-6">
      <nav>
        <ul className="space-y-5">
          <li>
            <NavLink href="/">
              <Home />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/search">
              <Search />
              Search
            </NavLink>
          </li>
          <li>
            <NavLink href="/your-library">
              <Library />
              Your Library
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
          <li>
            <NavLink variant="playlist" href="/playlist/chill-vibes">
              Chill Vibes
            </NavLink>
          </li>
          <li>
            <NavLink variant="playlist" href="/playlist/road-trip">
              Road Trip
            </NavLink>
          </li>
          <li>
            <NavLink variant="playlist" href="/playlist/workout-hits">
              Workout Hits
            </NavLink>
          </li>
          <li>
            <NavLink variant="playlist" href="/playlist/party-anthems">
              Party Anthems
            </NavLink>
          </li>
          <li>
            <NavLink variant="playlist" href="/playlist/relaxing-acoustics">
              Relaxing Acoustics
            </NavLink>
          </li>
          <li>
            <NavLink variant="playlist" href="/playlist/classic-rock">
              Classic Rock
            </NavLink>
          </li>
          <li>
            <NavLink variant="playlist" href="/playlist/jazz-evenings">
              Jazz Evenings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
