// import { useEffect, useState } from "react";
// import bg from "/webp/game1.webp";
// import AppRoutes from "./routes";

// export default function App() {
//   const [bgLoaded, setBgLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = bg;
//     img.onload = () => setBgLoaded(true);
//   }, []);

//   return (
//     <div
//       className={`min-h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
//         bgLoaded ? "opacity-100" : "opacity-0"
//       }`}
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <AppRoutes />
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import bg from "/webp/game1.webp";
import AppRoutes from "./routes";

export default function App() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bg;
    img.onload = () => setBgLoaded(true);

    // Show confetti on mount
    setShowConfetti(true);

    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
        bgLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}
      <AppRoutes />
    </div>
  );
}
