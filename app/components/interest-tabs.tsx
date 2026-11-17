"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

const tabNames = ["Photography", "Movies & TV", "Music", "Games"] as const;
const photography = [
  { src: "/interests/japan-01.png", width: 1832, height: 3264, alt: "Japanese castle roof detail" },
  { src: "/interests/japan-02.png", width: 3264, height: 1832, alt: "Red bridge and trees near a Japanese castle" },
  { src: "/interests/japan-03.png", width: 2160, height: 2880, alt: "Illuminated temple roof at night" },
  { src: "/interests/japan-04.png", width: 1832, height: 3264, alt: "Japanese castle against a bright sky" },
  { src: "/interests/japan-05.png", width: 3264, height: 1832, alt: "Japanese castle against a cloudy sky" },
  { src: "/interests/japan-06.png", width: 1200, height: 1600, alt: "Night street scene with Japanese signs" },
  { src: "/interests/sf-01.png", width: 1357, height: 760, alt: "Street musicians performing in San Francisco" },
  { src: "/interests/sf-02.png", width: 1337, height: 756, alt: "Downtown San Francisco street scene" },
  { src: "/interests/sf-03.png", width: 1200, height: 1600, alt: "Snowfall around a fountain" },
];
const albums = [
  { title: "Brand New Eyes", artist: "Paramore", src: "/music/paramore.jpg", href: "https://open.spotify.com/album/5BljC4IBPCs21w6mdtoMQh" },
  { title: "for the hell of it", artist: "Zac Greer", src: "/music/zac-greer.jpg", href: "https://open.spotify.com/album/5tuRJA0jYlArO69f7lhCCK" },
  { title: "I Know I'm Funny haha", artist: "Faye Webster", src: "/music/faye-webster.jpg", href: "https://open.spotify.com/album/454yeYs9PxTEwGmZf6OBpa" },
  { title: "NewJeans 1st EP 'New Jeans'", artist: "NewJeans", src: "/music/newjeans.jpg", href: "https://open.spotify.com/album/1HMLpmZAnNyl9pxvOnTovV" },
  { title: "Pokemon Jazz, Vol. II", artist: "Jazzémon Ensemble", src: "/music/pokemon-jazz.jpg", href: "https://open.spotify.com/album/3lahyO2T6YJ93cjpBuXYQE" },
  { title: "To Pimp a Butterfly", artist: "Kendrick Lamar", src: "/music/kendrick.jpg", href: "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP" },
  { title: "Dark Lane Demo Tapes", artist: "Drake", src: "/music/drake.jpg", href: "https://open.spotify.com/album/6OQ9gBfg5EXeNAEwGSs6jK" },
];
const screenFavorites = [
  { title: "One Piece", src: "/movies/one-piece.png", href: "https://www.imdb.com/title/tt0388629/" },
  { title: "Game of Thrones", src: "/movies/game-of-thrones.png", href: "https://www.imdb.com/title/tt0944947/" },
  { title: "Invincible", src: "/movies/invincible.png", href: "https://www.imdb.com/title/tt6741278/" },
  { title: "Arcane", src: "/movies/arcane.png", href: "https://www.imdb.com/title/tt11126994/" },
  { title: "Fantastic Mr. Fox", src: "/movies/fantastic-mr-fox.png", href: "https://www.imdb.com/title/tt0432283/" },
  { title: "tick, tick... BOOM!", src: "/movies/tick-tick-boom.png", href: "https://www.imdb.com/title/tt8721424/" },
  { title: "La La Land", src: "/movies/la-la-land.png", href: "https://www.imdb.com/title/tt3783958/" },
  { title: "Sinners", src: "/movies/sinners.png", href: "https://www.imdb.com/title/tt31193180/" },
  { title: "Munna Bhai M.B.B.S.", src: "/movies/munna-bhai-mbbs.png", href: "https://www.imdb.com/title/tt0374887/" },
  { title: "Chungking Express", src: "/movies/chungking-express.png", href: "https://www.imdb.com/title/tt0109424/" },
];
const games = [
  { title: "Wingspan", src: "/games/wingspan.png" },
  { title: "Valorant", src: "/games/valorant.png" },
  { title: "Super Mario Galaxy 2", src: "/games/super-mario-galaxy-2.png" },
  { title: "The Legend of Zelda: Breath of the Wild", src: "/games/breath-of-the-wild.png" },
  { title: "The Last of Us Part II", src: "/games/last-of-us-2.png" },
  { title: "Kirby's Epic Yarn", src: "/games/kirbys-epic-yarn.png" },
  { title: "Mario Kart: Double Dash!!", src: "/games/mario-kart-double-dash.png" },
  { title: "Hades", src: "/games/hades.png" },
  { title: "Ghost of Tsushima", src: "/games/ghost-of-tsushima.png" },
];

export function InterestTabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabNames)[number]>(tabNames[0]);
  const [isPhotoReelPaused, setIsPhotoReelPaused] = useState(false);
  const [activePhoto, setActivePhoto] = useState<(typeof photography)[number] | null>(null);
  const tabId = useId();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
        setIsPhotoReelPaused(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <div className="interest-tabs">
    <div className="interest-tab-list" role="tablist" aria-label="Media interests">
      {tabNames.map((tab) => <button key={tab} className={activeTab === tab ? "is-active" : ""} type="button" role="tab" aria-selected={activeTab === tab} aria-controls={`${tabId}-panel`} id={`${tabId}-${tab}`} onClick={() => setActiveTab(tab)}>{tab}</button>)}
    </div>
    <div className="interest-tab-panel" role="tabpanel" id={`${tabId}-panel`} aria-labelledby={`${tabId}-${activeTab}`}>
      {activeTab === "Photography" ? (
        <>
          <p className="interest-panel-copy">I love taking photos whenever I travel. Most recently, I travelled to Japan in August 2026.</p>
          <div className="photo-marquee" aria-label="Photography reel">
            <div className={`photo-marquee-track${isPhotoReelPaused ? " is-paused" : ""}`}>
              {[0, 1].map((group) => (
                <div className="photo-marquee-group" key={group} aria-hidden={group === 1}>
                  {photography.map((photo) => (
                    <button
                      type="button"
                      className="photo-marquee-item"
                      key={`${group}-${photo.src}`}
                      onMouseEnter={() => setIsPhotoReelPaused(true)}
                      onMouseLeave={() => setIsPhotoReelPaused(false)}
                      onClick={() => setActivePhoto(photo)}
                      tabIndex={group === 1 ? -1 : 0}
                      aria-label={`Open ${photo.alt}`}
                    >
                      <Image
                        className="photo-marquee-image"
                        src={photo.src}
                        alt={group === 0 ? photo.alt : ""}
                        width={photo.width}
                        height={photo.height}
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : activeTab === "Movies & TV" ? (
        <>
          <p className="interest-panel-copy">Some of my all-time favorite movies and TV shows. See my <a className="inline-reference" href="https://boxd.it/70Xmz" target="_blank" rel="noreferrer">Letterboxd</a> for more.</p>
          <div className="poster-marquee" aria-label="Favorite movies and TV shows">
            <div className={`poster-marquee-track${isPhotoReelPaused ? " is-paused" : ""}`}>
              {[0, 1].map((group) => (
                <div className="poster-marquee-group" key={group} aria-hidden={group === 1}>
                  {screenFavorites.map((favorite) => (
                    <a
                      className="poster-marquee-item"
                      key={`${group}-${favorite.src}`}
                      href={favorite.href}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={group === 1 ? -1 : 0}
                      aria-label={`View ${favorite.title} on IMDb`}
                      onMouseEnter={() => setIsPhotoReelPaused(true)}
                      onMouseLeave={() => setIsPhotoReelPaused(false)}
                    >
                      <Image className="poster-marquee-image" src={favorite.src} alt={group === 0 ? favorite.title : ""} width={720} height={1080} unoptimized />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : activeTab === "Music" ? (
        <>
          <p className="interest-panel-copy">What I&apos;m listening to right now. Feel free to message me with any recs!</p>
          <div className="album-marquee" aria-label="Albums I am listening to">
            <div className={`album-marquee-track${isPhotoReelPaused ? " is-paused" : ""}`}>
              {[0, 1].map((group) => (
                <div className="album-marquee-group" key={group} aria-hidden={group === 1}>
                  {albums.map((album) => (
                    <a
                      className="album-marquee-item"
                      key={`${group}-${album.src}`}
                      href={album.href}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={group === 1 ? -1 : 0}
                      aria-label={`Listen to ${album.title} by ${album.artist} on Spotify`}
                      onMouseEnter={() => setIsPhotoReelPaused(true)}
                      onMouseLeave={() => setIsPhotoReelPaused(false)}
                    >
                      <Image className="album-marquee-image" src={album.src} alt="" width={640} height={640} unoptimized />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : activeTab === "Games" ? (
        <>
          <p className="interest-panel-copy">I also love playing daily puzzle games (LinkedIn Games, NYT Crossword, etc.)</p>
          <div className="game-marquee" aria-label="Favorite games">
            <div className={`game-marquee-track${isPhotoReelPaused ? " is-paused" : ""}`}>
              {[0, 1].map((group) => (
                <div className="game-marquee-group" key={group} aria-hidden={group === 1}>
                  {games.map((game) => (
                    <div
                      className="game-marquee-item"
                      key={`${group}-${game.src}`}
                      onMouseEnter={() => setIsPhotoReelPaused(true)}
                      onMouseLeave={() => setIsPhotoReelPaused(false)}
                    >
                      <Image className={`game-marquee-image${game.title === "Wingspan" ? " game-marquee-image--contain" : ""}`} src={game.src} alt={group === 0 ? game.title : ""} width={720} height={1080} unoptimized />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="interest-panel-copy">Details coming soon.</p>
          <div className="interest-skeleton-lines" aria-label={`${activeTab} details coming soon`}>
            <span />
            <span />
          </div>
        </>
      )}
    </div>
    {activePhoto && (
      <div
        className="photo-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={activePhoto.alt}
        onClick={() => {
          setActivePhoto(null);
          setIsPhotoReelPaused(false);
        }}
      >
        <Image
          className="photo-lightbox-image"
          src={activePhoto.src}
          alt={activePhoto.alt}
          width={activePhoto.width}
          height={activePhoto.height}
          unoptimized
          onClick={(event) => event.stopPropagation()}
        />
      </div>
    )}
  </div>;
}
