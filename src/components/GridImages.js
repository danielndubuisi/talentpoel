import "./GridImages.css";
import gridImgOne from "./asset/grid-image1.svg";
import gridImgTwo from "./asset/grid-image2.svg";
import gridImgThree from "./asset/grid-image3.svg";
import gridImgFour from "./asset/grid-image4.svg";
import gridImgFive from "./asset/grid-image5.svg";
import gridImgSix from "./asset/grid-image6.svg";
import gridImgSeven from "./asset/grid-image7.svg";

const GridImages = () => {
  return (
    <div className="grid">
      <div className="grid-one">
        <img src={gridImgOne} alt="img1" />
        <img src={gridImgTwo} alt="img2" />
      </div>
      <img src={gridImgThree} alt="img3" />
      <div className="grid-two">
        <div className="grid-three">
          <img src={gridImgFour} alt="img4" />
          <img src={gridImgFive} alt="img5" />
        </div>
        <img src={gridImgSix} alt="img6" className="img-six" />
      </div>
      <img src={gridImgSeven} alt="img7" />
    </div>
  );
};

export default GridImages;
