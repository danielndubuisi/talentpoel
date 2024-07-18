import { Link } from "react-router-dom";
import "./vetting-process.css";
import { generalRoute } from "../../Data/generalRoutes";
import { Button } from "../Button";
// import video from "../asset/vetting-process/video.png";

const VettingProcess = () => {
  return (
    <section className="vetting-process-main-con layout">
      <div className="vetting-header">
        <h5>Our vetting process</h5>
        <p>
          Attracting top talent is crucial for any organisation. However, simply
          having a pool of candidates is not enough.
        </p>
      </div>
      <div className="vetting-video-con">
        <div>
          {/* added iframe tag to display the youtube video 7-16-2024 */}
          <iframe
            src="https://www.youtube.com/embed/I4Hzyv_6EXY?rel=0&showinfo=0&modestbranding=1&border=0"
            title="Talentpoel vetting video"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="vetting-video-iframe"
          />
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
