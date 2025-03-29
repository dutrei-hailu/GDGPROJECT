import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";  // Import the CSS file

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button
        onClick={() => navigate("/user/johndoe")}
        className="navbar-button"
      >
        Go to Profile
      </button>
    </nav>
  );
};

export default Navbar;
