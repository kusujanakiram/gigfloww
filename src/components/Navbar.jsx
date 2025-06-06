import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaCog, FaBell } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Gigfloww Logo" className="logo-img" />
        <span className="logo-text">GIGFLOWW</span>
      </div>
      <div className="navbar-center">
        <Link to="/home" className={isActive("/dashboard") ? "active" : ""}>Dashboard</Link>
        <Link to="/people" className={isActive("/people") ? "" : ""}>People</Link>
        <Link to="/hiring" className={isActive("/hiring") ? "" : ""}>Hiring</Link>
        <Link to="/salary" className={isActive("/salary") ? "" : ""}>Salary</Link>
        <Link to="/reviews" className={isActive("/reviews") ? "" : ""}>Reviews</Link>
      </div>
      <div className="navbar-right">
        <img src="/nav.png" alt="notification and setting" className="nav" />
        <img src="/profile.png" alt="Profile" className="profile-img" />
      </div>
    </nav>
  );
}

export default Navbar;
