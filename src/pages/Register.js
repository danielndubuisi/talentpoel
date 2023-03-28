import "./Register.css";
import HeroSection from "../components/HeroSection";
import { registerData } from "../Data/data";

const Register = () => {
  return (
    <div className="register">
      <HeroSection {...registerData} />
    </div>
  );
};

export default Register;
