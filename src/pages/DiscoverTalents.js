import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThreeModels from "../components/discover-talents/three-models/ThreeModels";

import "../components/discover-talents/three-models/ThreeModels.css";
import Talents from "../components/discover-talents/talents/Talents";
import AdditionalRoles from "../components/discover-talents/additional-roles/AdditionalRoles";

const DiscoverTalents = () => {
  return (
    <>
      <Navbar />
      <main className="discover-bg">
        <ThreeModels />
        <Talents />
      </main>
      <AdditionalRoles />
      <Footer />
    </>
  );
};

export default DiscoverTalents;
