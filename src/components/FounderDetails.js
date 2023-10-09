import "./FounderDetails.css";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import founderOne from "../components/asset/founder1.webp";
import founderTwo from "../components/asset/founder2.png";
import founderThree from "../components/asset/founder3.webp";
import founderFour from "../components/asset/founder4.webp";

const FounderDetails = () => {
  return (
    <div className="founders">
      <div className="founder">
        <img src={founderOne} alt="jephthah" />
        <div className="details jeph">
          <h4>Jephtah Abu</h4>
          <p>Founder</p>
          <div className="detail-links">
            <Link
              className="founder-icon-link"
              to="https://www.linkedin.com/in/jephtahabu/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="founder-icon-link"
              to="https://twitter.com/jephtahA_"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="founder">
        <img src={founderThree} alt="llyod" />
        <div className="details lloyd">
          <h4>Otukpa Lloyd</h4>
          <p>Co-founder/cmo</p>
          <div className="detail-links">
            <Link
              className="founder-icon-link"
              to="https://www.linkedin.com/in/godwinoi/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="founder-icon-link"
              to="https://twitter.com/glucosezaddy90"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="founder">
        <img src={founderTwo} alt="karen" />
        <div className="details karen">
          <h4>Margareth Egbuchulam</h4>
          <p>Operations Manager</p>
          <div className="detail-links">
            <Link
              className="founder-icon-link"
              to="https://www.linkedin.com/in/margareth-egbuchulam"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="founder-icon-link"
              to="https://x.com/maegy_george?s=21"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="founder">
        <img src={founderFour} alt="udoye" />
        <div className="details udoye">
          <h4>Udoye Chinemerem</h4>
          <p>Executive Assistant</p>
          <div className="detail-links">
            <Link
              className="founder-icon-link"
              to="https://www.linkedin.com/in/chinemerem-udoye"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="founder-icon-link"
              to="https://twitter.com/nemeremkamsiyo?s=21&t=Yl_UCXle_ernRHc4DUkJMg"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderDetails;
