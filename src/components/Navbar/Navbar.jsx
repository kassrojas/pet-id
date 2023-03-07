import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Pet ID</h1>
      <div className="navLinks">
        <a href="/">Home</a>
        <a href="/addPet">Add A New Pet</a>
        <a href="/editPet">Edit Pet Details</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
