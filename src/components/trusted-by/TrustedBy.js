import "./trustedby.css";
import { TrustedImg } from "../../Data/trustedImg";

const TrustedBy = () => {
  return (
    <section className="layout trusted">
      <h5>Trusted by</h5>
      <div className="trusted-img-con">
        {TrustedImg.map((item, index) => (
          <img src={item.img} alt="" key={index} />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
