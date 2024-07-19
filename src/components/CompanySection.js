import "./CompanySection.css";
import Slider from "react-slick";
import review1 from "./asset/reviews/review_1.png"
import review2 from "./asset/reviews/review_2.png"
import review3 from "./asset/reviews/review_3.png"
import review4 from "./asset/reviews/review_4.png"
import review5 from "./asset/reviews/review_5.png"
// import vector from "./asset/icons/vector.svg";
// import company from "./asset/icons/company.svg";
// import founders from "./asset/icons/founders.svg";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
// import { generalRoute } from "../Data/generalRoutes";

// import image from "./asset/discover/company.webp"

// const reviews = [

// ]

const CompanySection = () => {
  return (
    <div className="company-section layout flex_wrapper">
      <h5 className="company-section_heading">Reviews from our customers</h5>
      <div className="slider_container">
        <Slider>

        </Slider>
      </div>
    </div>
  );
};

export default CompanySection;
