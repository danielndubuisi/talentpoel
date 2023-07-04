import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./additional-roles.css";

import image from "../../asset/discover/add.jpg"

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
        <LazyLoadImage
          src={image}
          alt=""
          effect="blur"
        />
        <div>
          <p>let’s find other talents</p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalRoles;
