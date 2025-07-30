import SimpleSlider from "@/components/ImageCarausel";
import Navbar from "@/components/Navbar";
import GameLinks from "./GameLinks";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <GameLinks />
    </div>
  );
};

export default Home;
