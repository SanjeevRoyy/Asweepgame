const topWheelers = [
  { name: "1. Mary Johnson", amount: "$ 95.31" },
  { name: "2. Sylvia Miller", amount: "$ 72.91" },
  { name: "3. Phillip Calderon", amount: "$ 53.65" },
];

const games = [
  { name: "FireKirin", image: "jpg/fire.jpg" },
  { name: "OrionStar", image: "jpg/orion.jpg" },
  { name: "Juwa", image: "jpg/juwa.jpg" },
  { name: "Game", image: "jpg/gamee.jpg" },
  { name: "FireKirin", image: "jpg/fire.jpg" },
  { name: "OrionStar", image: "jpg/orion.jpg" },
  { name: "Juwa", image: "jpg/juwa.jpg" },
  { name: "Game", image: "jpg/gamee.jpg" },
  { name: "GameVault", image: "jpg/vault.jpg" },
  { name: "CasinoRoyale", image: "jpg/royale.jpg" },
  { name: "VegasSweep", image: "jpg/vegas.jpg" },
  { name: "MilkyWay", image: "jpg/milkyways.jpg" },
  { name: "Ultra Panda", image: "jpg/panda.jpg" },
  { name: "Cash Frenzy", image: "jpg/frenzy.jpg" },
  { name: "PandaMaster", image: "jpg/pandamaster.jpg" },
  { name: "Vblink", image: "jpg/vblink.jpg" },
  { name: "River Sweeps", image: "jpg/reversweeps.png" },
  { name: "HighStake", image: "jpg/highstake.jpg" },
  { name: "VegasX", image: "jpg/vegasx.png" },
  { name: "Acebook", image: "jpg/ace.jpg" },
  { name: "Blue Dragon", image: "jpg/dragons.jpg" },
  { name: "GameVault", image: "jpg/vault.jpg" },
  { name: "CasinoRoyale", image: "jpg/royale.jpg" },
  { name: "VegasSweep", image: "jpg/vegas.jpg" },
];

const GameLinks = () => {
    return (
      <div className="bg-[#101010] p-5 sm:p-8">
        {/* Title - smaller margin bottom on mobile */}
        <h1 className="text-[20px] sm:text-[24px] text-center font-jaini font-normal leading-[1.2] bg-gradient-to-b from-[#FFF600] via-[#FFAE00] to-[#FFE24E] bg-clip-text text-transparent text-shadow mb-2 sm:mb-6">
          Yesterday's top 3 wheelers
        </h1>
  
        {/* Top wheelers */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-1 sm:mt-3">
          {topWheelers.map(({ name, amount }, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#FFF600] via-[#FFAE00] to-[#FFE24E] rounded-full p-[2px]"
            >
              <div className="bg-[#101010] rounded-full w-[280px] sm:w-[360px] flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3">
                <p className="text-[16px] sm:text-[18px] font-jaini bg-gradient-to-b from-[#FFF600] via-[#FFAE00] to-[#FFE24E] bg-clip-text text-transparent text-shadow truncate">
                  {name}
                </p>
                <p className="text-[16px] sm:text-[18px] font-jaini bg-gradient-to-b from-[#FFF600] via-[#FFAE00] to-[#FFE24E] bg-clip-text text-transparent text-shadow">
                  {amount}
                </p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Game Links Buttons */}
        <div>
          <h1 className="gradient-text leading-tight text-3xl text-center mt-8 sm:mt-10">
            Game Links
          </h1>
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-3 sm:mt-5">
            <button className="gradient-border-button text-sm sm:text-base px-3 sm:px-6 py-1 sm:py-3">
              Player Link
            </button>
            <div className="flex gap-1 sm:gap-2">
              <div className="h-16 w-[2px] bg-gradient-to-b from-[#FFF600] via-[#FFAE00] to-[#FFE24E]" />
              <div className="h-16 w-[2px] bg-gradient-to-b from-[#FFF600] via-[#FFAE00] to-[#FFE24E]" />
            </div>
            <button className="gradient-white-button text-sm sm:text-base px-3 sm:px-6 py-1 sm:py-3">
              Agent Link
            </button>
          </div>
        </div>
  
        {/* Games section */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 mt-8 sm:mt-10 px-2 sm:px-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-xl"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-[100px] sm:w-[140px] md:w-[180px] h-[100px] sm:h-[140px] md:h-[180px] object-cover rounded-lg"
              />
              <button className="mt-3 relative px-2 sm:px-4 pb-1 font-jaini text-[20px] sm:text-[28px] font-normal leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis bg-clip-text text-transparent bg-gradient-to-b from-[#FFF600] via-[#FFAE00] to-[#FFE24E] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <span className="gradient-text">{game.name}</span>
  
                {/* Top border */}
                <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFF600] via-[#FFAE00] to-[#FFE24E]" />
  
                {/* Bottom border */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFF600] via-[#FFAE00] to-[#FFE24E]" />
              </button>
            </div>
          ))}
        </div>
  
        {/* We Accept Section */}
        <h1 className="gradient-text leading-tight text-3xl text-center mt-8 sm:mt-10">
          We Accept
        </h1>
        <div className="flex justify-center items-center gap-4 mt-2">
          <img src="png/dollar.png" alt="Dollar" className="w-10 h-10 sm:w-12 sm:h-12" />
          <img src="png/bitcoin.png" alt="Bitcoin" className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
      </div>
    );
  };
  
  

export default GameLinks;
