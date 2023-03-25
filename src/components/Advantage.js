import "./Advantage.css";
import line from "../components/asset/vector-line.svg";
import { SlWrench } from "react-icons/sl";
import { FiShield } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const Advantage = () => {
  return (
    <div className="advantage" id="advantage">
      <div className="title">
        <h3>Our competitive advantage</h3>
        <img src={line} alt="line" />
      </div>
      <div className="body">
        <div className="ad-item">
          <SlWrench className="icon" />
          <h3>Support</h3>
          <p>
            We are able to assist organisations in hiring talent in Africa
            without restrictions. By handling payroll, Talent legal
            documentation, and providing guidance on selecting the best talent
            for their teams, we eliminate the arduous process that organisations
            typically experience when hiring talent in Africa.
          </p>
        </div>
        <div className="ad-item">
          <FiShield className="icon orange" />
          <h3>Our team</h3>
          <p>
            Our team comprises of skilled individuals with a deep understanding
            of the African Market, not just from a Talent matching perspective,
            but also from a legal perspective when it comes to hiring these
            individuals.
          </p>
        </div>
        <div className="ad-item">
          <BiSearch className="icon purple" />
          <h3>Our vetting process</h3>
          <p>
            We are among the first companies in Africa to have a rigorous
            process for incorporating only non-technical Talent into our talent
            network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
