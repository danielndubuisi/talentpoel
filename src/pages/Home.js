import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { homeDataOne } from "../Data/data";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection {...homeDataOne} />
      <Footer />
    </>
  );
};

export default Home;
