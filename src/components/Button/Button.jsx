import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <Link to="/editPet">
      <button className="btn">Edit Pet Details</button>
    </Link>
  );
};

export default Button;
