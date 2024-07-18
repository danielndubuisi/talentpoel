import Marquee from "react-fast-marquee";

import "./trustedby.css";
import logo1 from "../asset/icons/trusted-by/logo5.svg";
import logo2 from "../asset/icons/trusted-by/Business Builders Africa.svg";
import logo3 from "../asset/icons/trusted-by/Creating Coding Careers.svg";
import logo4 from "../asset/icons/trusted-by/envi5.svg";
import logo5 from "../asset/icons/trusted-by/Sign-Speak.svg";
import logo6 from "../asset/icons/trusted-by/the_layered_onion_logo.svg";
import logo7 from "../asset/icons/trusted-by/Wolomi.svg";
import logo8 from "../asset/icons/trusted-by/Pound Cake 1.svg";

const TrustedBy = () => {
  return (
    <section className="layout trusted">
      <h5>Trusted by</h5>
      <Marquee>
        <div className="trusted-img-con">
          <img src={logo1} alt="" className="trusted-img" />
          <img src={logo2} alt="" className="trusted-img" />
          <img src={logo3} alt="" className="trusted-img" />
          <img src={logo4} alt="" className="trusted-img" />
          <img src={logo5} alt="" className="trusted-img1" />
          <img src={logo6} alt="" className="trusted-img" />
          <img src={logo7} alt="" className="trusted-img" />
          <img src={logo8} alt="" className="trusted-img" />
        </div>
      </Marquee>
    </section>
  );
};

export default TrustedBy;
