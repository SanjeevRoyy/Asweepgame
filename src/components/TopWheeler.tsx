import { FaDollarSign } from "react-icons/fa";

const TopWheeler = () => {
  const topWheelers = [
    { name: "Mary Johnson", amount: "95.31", img: "png/user.png" },
    { name: "Sylvia Miller", amount: "72.91", img: "png/user.png" },
    { name: "Phillip Calderon", amount: "53.65", img: "png/user.png" },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-5 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
      <p className="font-secondary font-bold text-2xl sm:text-3xl md:text-[28px] text-gradient">
        YESTERDAY’S
      </p>
      <p className="font-secondary font-bold text-3xl sm:text-4xl md:text-[36px] text-gradient mb-6">
        TOP 3 WHEELERS
      </p>

      {/* Top wheelers list */}
      <div className="flex flex-col gap-4 w-full">
        {topWheelers.map((wheeler, index) => (
          <div
            key={index}
            className="
              flex justify-between items-center 
              px-6 py-4 rounded-xl shadow-xl backdrop-blur-md bg-white/10 border border-white/10
              md:px-20 md:p-4
            "
          >
            {/* Left: Position + Avatar + Name */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="text-xl font-bold text-white min-w-[24px] text-center">
                {index + 1}
              </div>
              <div className="flex items-center gap-4 min-w-0 overflow-hidden">
                <img
                  src={wheeler.img}
                  alt={wheeler.name}
                  className="w-10 h-10 rounded-full object-cover shadow-md flex-shrink-0"
                />
                <p className="font-medium text-white truncate max-w-xs md:max-w-[200px]">
                  {wheeler.name}
                </p>
              </div>
            </div>

            {/* Right: Icon + Amount */}
            <div className="flex items-center gap-2 min-w-[70px] justify-end">
              <div className="circle-curve-button bg-white p-1 rounded-full flex items-center justify-center">
                <FaDollarSign size={15} color="black" />
              </div>
              <p className="text-lg font-semibold text-white">{wheeler.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWheeler;
