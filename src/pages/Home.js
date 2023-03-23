import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { homeDataOne, homeDataTwo, homeDataThree } from "../Data/data";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection {...homeDataOne} />
      <HeroSection {...homeDataTwo} />
      <HeroSection {...homeDataThree} />
      <Footer />
    </div>
  );
};

export default Home;
