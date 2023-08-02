import { Helmet } from "react-helmet-async";
import { config } from "../app.config";
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
  const postTitle = "Talentpoel";
  const postDescription = "Discover the best non-technical talents in Africa.";
  const postImageUrl = `${config.IMAGE_BASE_URL}/v1690737482/Header_nzmstx.png`;
  const postUrl = "https://talentpoel.com/";
  return (
    <div>
      <Helmet>
        <title>{postTitle}</title>
        <meta name="description" content={postDescription} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:image" content={postImageUrl} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

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
    </div>
  );
};

export default Home;
