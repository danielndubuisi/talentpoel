import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import BottomSection from "../components/BottomSection";
import CompanySection from "../components/CompanySection";
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
import { generalRoute } from "../Data/generalRoutes";
import Hero from "../components/hero/Hero";
import TrustedBy from "../components/trusted-by/TrustedBy";
import Cost from "../components/cost/Cost";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Cost />
      <Advantage />
      {/* <HeroSection {...homeDataThree} /> */}
      {/* <HeroSection {...homeDataFour} /> */}
      {/* <HeroSection {...homeDataFive} /> */}
      {/* <HeroSection {...homeDataSix} /> */}
      {/* <div className="home-btn-wrapper">
        <Link to={generalRoute.becomeATalent}>
          <Button {...homeButtonData} />
        </Link>
      </div> */}
      {/* <BottomSection {...bottomSectionOne} /> */}
      {/* <HeroSection {...aboutData} /> */}
      {/* <BottomSection {...bottomSectionTwo} /> */}
      {/* <BottomSection {...bottomSectionThree} /> */}
      {/* <CompanySection /> */}
      <Footer />
    </div>
  );
};

export default Home;
