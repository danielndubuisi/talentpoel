import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import BottomSection from "../components/BottomSection";
import {
  homeDataOne,
  homeDataTwo,
  homeDataThree,
  homeDataFour,
  homeDataFive,
  homeDataSix,
  homeButtonData,
  bottomSectionOne,
  bottomSectionTwo,
  bottomSectionThree,
  aboutData,
} from "../Data/data";
import Advantage from "../components/Advantage";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

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
      <div className="home-btn-wrapper">
        <Link to="/register">
          <Button {...homeButtonData} />
        </Link>
      </div>
      <BottomSection {...bottomSectionOne} />
      <HeroSection {...aboutData} />
      <BottomSection {...bottomSectionTwo} />
      <BottomSection {...bottomSectionThree} />
      <Footer />
    </div>
  );
};

export default Home;
