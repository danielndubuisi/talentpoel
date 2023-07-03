import Marquee from "react-fast-marquee";

import "./trustedby.css";
import logo1 from "../asset/icons/trusted-by/logo1.svg";
import logo2 from "../asset/icons/trusted-by/logo2.svg";
import logo3 from "../asset/icons/trusted-by/logo3.svg";
import logo4 from "../asset/icons/trusted-by/logo4.svg";
import logo5 from "../asset/icons/trusted-by/logo5.svg";

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
          <img src={logo5} alt="" className="trusted-img" />
        </div>
      </Marquee>
    </section>
  );
};

export default TrustedBy;
