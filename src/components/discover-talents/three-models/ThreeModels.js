import "./ThreeModels.css";
import icon1 from "../../asset/discover/icons/icon1.svg";
import icon2 from "../../asset/discover/icons/icon2.svg";
import icon3 from "../../asset/discover/icons/icon3.svg";

const ThreeModels = () => {
  return (
    <div className="three-model-container layout">
      <div className="tm-title-container">
        <h1>We thrive on three models to help your business flourish</h1>
      </div>
      <div className="tm-flex-container">
        <div>
          <div className="tm-icons-main-con">
            <img src={icon1} alt="" />
            <p>Speed Matching you with diverse non-technical talent</p>
          </div>
          <div className="tm-icons-main-con" style={{ marginTop: "32px" }}>
            <img src={icon2} alt="" />
            <p>
              We are part of the onboarding process to make sure your values
              align with that our talent, we have a team member join the first
              onboarding process, and we check up with the clients and talent to
              make sure there is a synergy of task and efforts.
            </p>
          </div>
          <div className="tm-icons-main-con" style={{ marginTop: "32px" }}>
            <img src={icon3} alt="" />
            <p>
              Handle the mundane tasks (payroll, tax filing, getting equipment
              across to the talent based on the request of the client, and
              localized benefits (optional) ). All you have to do is assign
              tasks and come for team meetings with the talent(if necessary)
            </p>
          </div>
        </div>
        <div>
          <div className="right-tmf">
            <img
              src="https://res.cloudinary.com/dcp6fbxa9/image/upload/v1687250145/Frame_371_j2pk3t.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeModels;
