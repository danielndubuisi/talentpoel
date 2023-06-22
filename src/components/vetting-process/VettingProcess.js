import { Link } from "react-router-dom";
import "./vetting-process.css";
import { generalRoute } from "../../Data/generalRoutes";
import { Button } from "../Button";
import video from "../asset/vetting-process/video.png";

const VettingProcess = () => {
  return (
    <section className="vetting-process-main-con layout">
      <div className="vetting-header">
        <h5>Our vetting process for Talentpoel</h5>
        <p>
          Attracting top talent is crucial for any organisation. However, simply
          having a pool of candidates is not enough.
        </p>
      </div>
      <div className="vetting-video-con">
        <div>
          <img src={video} alt="" />
        </div>
      </div>
      <div className="vetting-btn-con">
        <Link to={generalRoute.hireATalent}>
          <Button
            buttonColor="green"
            icon
            text="Hire a talent"
            display={true}
            loading={false}
          />
        </Link>
      </div>
    </section>
  );
};

export default VettingProcess;
