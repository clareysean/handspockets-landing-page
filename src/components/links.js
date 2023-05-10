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
            <LinkButton title="Bandcamp" icon={<BandcampIcon />} href={""} />
          </li>
          <li>
            <LinkButton title="Tidal" icon={<TidalIcon />} href={""} />
          </li>
          <li>
            <LinkButton
              title="Apple Music"
              icon={<AppleMusicIcon />}
              href={""}
            />
          </li>
          <li>
            <LinkButton title="Spotify" icon={<SpotifyIcon />} href={""} />
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
