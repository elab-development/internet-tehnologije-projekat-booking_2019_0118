import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };


  const handleRegisterClick = async (e) => {
    navigate("/register");
  };

  const handleLogOutClick = () => {
    localStorage.setItem("user", null)
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookingSerbia</span>
        </Link>
        {user ?
          (<div className="navItems">
            <label>{user.username}</label>
            <button onClick={handleLogOutClick} className="navButton">Log out</button>
          </div>) : (
            <div className="navItems">
              <button onClick={handleRegisterClick} className="navButton">Register</button>
              <button onClick={handleLoginClick} className="navButton">Login</button>
            </div>
          )
        }
      </div >
    </div >
  )
}

export default Navbar