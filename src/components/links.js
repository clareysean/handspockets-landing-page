import React from "react";
import LinkButton from "./LinkButton";
import {
  BandcampIcon,
  TidalIcon,
  AppleMusicIcon,
  SpotifyIcon,
  InstaIcon,
  TiktokIcon,
} from "../Logos";

export default function Links() {
  return (
    <>
      <div className="streaming-container">
        <h1>STREAMING</h1>
        <ul>
          <li>
            <LinkButton
              title="Bandcamp"
              icon={<BandcampIcon />}
              href={"https://handspockets.bandcamp.com/track/not-worth-fixing"}
            />
          </li>
          <li>
            <LinkButton
              title="Tidal"
              icon={<TidalIcon />}
              href={"https://tidal.com/browse/artist/48870482?u"}
            />
          </li>
          <li>
            <LinkButton
              title="Apple Music"
              icon={<AppleMusicIcon />}
              href={"https://music.apple.com/us/artist/handspockets/1755447005"}
            />
          </li>
          <li>
            <LinkButton
              title="Spotify"
              icon={<SpotifyIcon />}
              href={"https://open.spotify.com/artist/7DZlkE9YRL6aDLuleXVBwQ"}
            />
          </li>
        </ul>
      </div>
      <div className="socials-container">
        <h1>SOCIALS</h1>
        <ul>
          <li>
            <LinkButton
              title="Instagram"
              icon={<InstaIcon />}
              href={
                "https://instagram.com/handspockets?igshid=ZGUzMzM3NWJiOQ=="
              }
            />
          </li>
          <li>
            <LinkButton
              title="Tiktok"
              icon={<TiktokIcon />}
              href={"https://www.tiktok.com/@handspockets?_t=8cBvicrfInN&_r=1"}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
