import { useState, useEffect } from "react";

const games = [
  { name: "FireKirin", image: "jpg/fire.jpg" },
  { name: "OrionStar", image: "jpg/orion.jpg" },
  { name: "Juwa", image: "jpg/juwa.jpg" },
  { name: "Game", image: "jpg/gamee.jpg" },
  { name: "Game Vault", image: "jpg/vault.jpg" },
  { name: "CasinoRoyale", image: "jpg/royale.jpg" },
  { name: "VegasSweep", image: "jpg/vegas.jpg" },
  { name: "MilkyWay", image: "jpg/milkyways.jpg" },
  { name: "Ultra Panda", image: "jpg/panda.jpg" },
  { name: "Cash Frenzy", image: "jpg/frenzy.jpg" },
  { name: "PandaMaster", image: "jpg/pandamaster.jpg" },
  { name: "V Blink", image: "jpg/vblink.jpg" },
  { name: "River Sweeps", image: "jpg/reversweeps.png" },
  { name: "HighStake", image: "jpg/highstake.jpg" },
  { name: "Vegas X", image: "jpg/vegasx.png" },
  { name: "Fire Kirin", image: "jpg/fire.jpg" },
  { name: "Blue Dragon", image: "jpg/dragons.jpg" },
  { name: "Yolo", image: "jpg/yolo.png" },
  { name: "Game Room", image: "jpg/gameroom.png" },
  { name: "Joker", image: "jpg/joker.png" },
  { name: "Fire Kirin", image: "jpg/mafia.png" },
];

const SkeletonCard = () => (
  <div className="flex flex-col items-center text-center rounded-xl py-5 p-4 bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg animate-pulse w-full max-w-[200px] mx-auto">
    <div className="w-full aspect-square rounded-lg bg-gray-400/20 mb-4" />
    <div className="h-6 w-32 bg-gray-400/20 rounded mb-4" />
    <div className="h-10 w-full bg-gray-400/20 rounded" />
  </div>
);

const GameCard = ({ name, image }: { name: string; image: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col items-center text-center rounded-xl py-5 p-4 bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-[200px] mx-auto">
      <div className="w-full aspect-square rounded-lg overflow-hidden relative">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-400/20 animate-pulse rounded-lg" />
        )}
        <img
          src={image}
          alt={name}
          loading="lazy"
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <p className="mt-4 text-primary font-medium text-[22px] text-custom truncate max-w-full">
        {name}
      </p>

      <button className="button-primary mt-3 w-full max-w-[180px] sm:max-w-[220px] px-3 py-1 sm:px-4 sm:py-2">
        <span className="button-content text-xs sm:text-sm whitespace-nowrap">
          PLAY NOW
        </span>
      </button>
    </div>
  );
};

const GameLinks = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay (replace with real data fetching)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-5 sm:p-8 max-w-[1280px] mx-auto">
      <div>
        <p className="text-gradient text-secondary text-[32px] sm:text-[40px] font-bold text-center">
          GAME LINKS
        </p>
        <div className="flex justify-center items-center gap-2 mt-3 flex-wrap">
          <button className="button-primary">
            <span className="button-content">PLAYER LINKS</span>
          </button>

          <button className="button-outline">
            <span className="button-content">AGENT LINKS</span>
          </button>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 p-1 sm:p-2 md:p-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : games.map((game, index) => (
              <GameCard key={index} name={game.name} image={game.image} />
            ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        <button className="button-outline mt-5 px-3 py-1 sm:px-5 sm:py-2">
          <span className="button-content font-semibold text-[12px] sm:text-[16px] md:text-[18px] whitespace-nowrap">
            MORE GAMES COMING SOON!
          </span>
        </button>
      </div>
    </div>
  );
};

export default GameLinks;
