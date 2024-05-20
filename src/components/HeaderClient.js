import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
     <nav className="navbar">
      <div className="logo">
       <Link to="/client-profile" className="nav-link">
          Coachini
        </Link>
        
      </div>

      <div className="auth-links">
        
        <Link to="/client-signin" className="nav-link">
       Logout
        </Link>
      </div>
    </nav>
    </header>
  );
};

export default Header;
