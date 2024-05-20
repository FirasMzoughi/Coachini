import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
     <nav className="navbar">
      <div className="logo">
       <Link to="/" className="nav-link">
          Coachini
        </Link>
        
      </div>

      <div className="auth-links">
        <Link to="/coach-signin" className="nav-link">
        Sign In as a Coach
        </Link>
        <Link to="/client-signin" className="nav-link">
        Sign In as a Client
        </Link>
      </div>
    </nav>
    </header>
  );
};

export default Header;
