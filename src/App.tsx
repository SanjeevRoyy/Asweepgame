import { useEffect, useState, lazy, Suspense } from "react";
import bg from "/webp/game1.webp";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const TopWheeler = lazy(() => import("./components/TopWheeler"));
const Home = lazy(() => import("./pages/Home"));
const GameLinks = lazy(() => import("./pages/GameLinks"));
const AcceptPayment = lazy(() => import("./components/AcceptPayment"));

export default function App() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bg;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
        bgLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen bg-black/75 text-white">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Navbar />
          <div className="px-4 sm:px-8 md:px-16 py-4">
            <Home />
            <TopWheeler />
            <GameLinks />
            <AcceptPayment />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
