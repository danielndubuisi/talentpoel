import "./Register.css";
import HeroSection from "../components/HeroSection";
import { homeDataTwo } from "../Data/data";

const Register = () => {
  return (
    <>
      <HeroSection {...homeDataTwo} />
    </>
  );
};

export default Register;
