import { Link } from "react-router-dom";
import { dropdownItems } from "../../NavItems/NavItems";
import "./EditPet.css";
const EditPet = () => {
  return (
    <div className="editPet">
      <h1>Viewing Edit Pet Page</h1>
      <div className="petDetails">
        {dropdownItems.map((item) => {
          return (
            <button key={item.id}>
              <Link to={item.path}>{item.title}</Link>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EditPet;
