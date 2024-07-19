import Marquee from "react-fast-marquee";

import "./trustedby.css";
import logo1 from "../asset/icons/trusted-by/finish'd.png";
import logo2 from "../asset/icons/trusted-by/Business Builders Africa.png";
import logo3 from "../asset/icons/trusted-by/Creating Coding Careers.png";
import logo4 from "../asset/icons/trusted-by/envi5.png";
import logo5 from "../asset/icons/trusted-by/Sign-Speak.png";
import logo6 from "../asset/icons/trusted-by/the_layered_onion_logo.png";
import logo7 from "../asset/icons/trusted-by/Wolomi.png";
import logo8 from "../asset/icons/trusted-by/Pound Cake 1.png";

const TrustedBy = () => {
  return (
    <section className="layout trusted">
      <h5>Trusted by</h5>
      <Marquee>
        <div className="trusted-img-con">
          <img src={logo1} alt="" className="trusted-img" />
          <img src={logo2} alt="" className="trusted-img" />
          <img src={logo3} alt="" className="trusted-img trusted-img-2" />
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
