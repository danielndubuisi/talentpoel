import "./FounderDetails.css";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import founderOneImg from "../components/asset/founderOne.svg";
import founderTwoImg from "../components/asset/Karen.svg";
import founderThreeImg from "../components/asset/founderThree.svg";

const FounderDetails = () => {
  return (
    <div className="founders">
      <div className="founder-jeph">
        <img src={founderOneImg} alt="jephthah" />
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
      <div className="founder-karen">
        <img src={founderTwoImg} alt="karen" />
        <div className="details karen">
          <h4>Karen Chukwu</h4>
          <p>Chief Legal Office</p>
          <div className="detail-links">
            <Link
              className="founder-icon-link"
              to="https://www.linkedin.com/in/karen-chukwu/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="founder-icon-link"
              to="https://twitter.com/Karen_Amarii"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="founder-llyod">
        <img src={founderThreeImg} alt="llyod" />
        <div className="details lloyd">
          <h4>Otukpa Lloyd</h4>
          <p>Sales Marketing Manager</p>
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
    </div>
  );
};

export default FounderDetails;
