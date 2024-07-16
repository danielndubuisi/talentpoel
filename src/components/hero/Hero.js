import React from "react";
import { config } from "../../app.config";

import { generalRoute } from "../../Data/generalRoutes";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import imageOne from "../asset/hero/Anne.png";
import imageTwo from "../asset/hero/Dubem.png";

import "./hero.css";

const Hero = () => {
  return (
    <div id="top" className="home__hero-section darkBg hero">
      <div className="layout">
        <div className="flex ">
          <div className="">
            <div className="home__hero-text-wrapper">
              <h1 className="heading">
                Scale your business with the best
                <span className="greenhead"> non-technical talent </span>
                in Africa
              </h1>
              <p className="home__hero-subtitle dark">
                Our matching process is designed to be adaptable and flexible,
                allowing us to create a customised process for each of our
                clients.
              </p>
              <div className="button-container">
                <Link to={generalRoute.discoverTalents} className="space-btn">
                  <Button
                    buttonColor="white"
                    text="Discover talents"
                    display={true}
                    loading={false}
                  />
                </Link>
                <Link to={generalRoute.becomeATalent}>
                  <Button
                    buttonColor="green"
                    text="Become a talent"
                    display={true}
                    loading={false}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* installed tailwind css and adding changes to the image container 7-16-2024 */}
          <div className="hero-img-con relative -top-[54px] grid grid-cols-2 ">
            <div className="z-20 relative lg:left-8 xl:left-0">
              <img
                src={imageOne}
                alt="Anne profile"
                className="rounded-3xl w-full shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]"
              />
            </div>
            <div className="relative top-[136.94px] xl:-left-[34.94px] left-0 z-10 ">
              <img
                src={imageTwo}
                alt="Anne profile"
                className="rounded-3xl w-full"
              />
            </div>
            <div className="py-2 px-4 rounded-[100px] bg-primary absolute -bottom-[21px] z-30 xl:-ml-9 lg:-ml-16">
              <p className="text-sm font-normal ">
                Quality candidates for Quality companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
