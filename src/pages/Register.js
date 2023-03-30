import "./Register.css";
import RegisterSection from "../components/RegisterSection";
import { registerData } from "../Data/data";

const Register = () => {
  return (
    <div className="register">
      <RegisterSection {...registerData} />
    </div>
  );
};

export default Register;
