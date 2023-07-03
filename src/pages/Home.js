import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import BottomSection from "../components/BottomSection";
import CompanySection from "../components/CompanySection";
import { bottomSectionOne, bottomSectionTwo, aboutData } from "../Data/data";
import Advantage from "../components/Advantage";
import Hero from "../components/hero/Hero";
import TrustedBy from "../components/trusted-by/TrustedBy";
import Cost from "../components/cost/Cost";
import VettingProcess from "../components/vetting-process/VettingProcess";
import Faq from "../components/faq/Faq";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Cost />
      <Advantage />
      <VettingProcess />
      <BottomSection {...bottomSectionOne} />
      <HeroSection {...aboutData} />
      <BottomSection {...bottomSectionTwo} />
      <CompanySection />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
