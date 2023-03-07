import { dropdownItems } from "../NavItems/NavItems";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./DropDown.css";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="dropdown">
      <ul className="editPetDropdown" onClick={() => setDropdown(!dropdown)}>
        {dropdownItems.map((item) => {
          return (
            <li key={item.id} onClick={() => setDropdown(!dropdown)}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
