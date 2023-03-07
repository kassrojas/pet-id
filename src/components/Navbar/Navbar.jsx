import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import { NavItems } from "../NavItems/NavItems";
import "./Navbar.css";
// import Dropdown from "../DropDown/DropDown";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1>Pet ID</h1>
        </Link>
        <ul className="navLinks">
          {NavItems.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
          {/* <Button /> */}
        </ul>
      </nav>
      {/* <Dropdown /> */}
    </>
  );
};

export default Navbar;
