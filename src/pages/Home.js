import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import {
  homeDataOne,
  homeDataTwo,
  homeDataThree,
  homeDataFour,
  homeDataFive,
  homeDataSix,
} from "../Data/data";
import Advantage from "../components/Advantage";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection {...homeDataOne} />
      <HeroSection {...homeDataTwo} />
      <Advantage />
      <HeroSection {...homeDataThree} />
      <HeroSection {...homeDataFour} />
      <HeroSection {...homeDataFive} />
      <HeroSection {...homeDataSix} />
      <Footer />
    </div>
  );
};

export default Home;
