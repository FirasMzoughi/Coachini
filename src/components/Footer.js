// src/components/Footer.js

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Coachini. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
