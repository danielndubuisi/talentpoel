import "./additional-roles.css";

import { config } from "../../../app.config";

const AdditionalRoles = () => {
  return (
    <section className="additional-roles-con layout">
      <div className="additional-roles-left">
        <p>
          <span>Additional roles:</span> In addition to the previously mentioned
          roles, Talentpoel also offers expertise in sourcing and vetting
          non-technical talent for various other positions. Our commitment to
          helping you find the right fit extends beyond the predefined
          categories. We understand that every business has unique needs, and we
          are dedicated to assisting you in finding the perfect candidate for
          your specific requirements.
        </p>
      </div>
      <div className="additional-roles-right">
        <img
          src={`${config.IMAGE_BASE_URL}/v1688484011/add_p9gcga.webp`}
          alt=""
        />
        <div>
          <p>let’s find other talents</p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalRoles;
