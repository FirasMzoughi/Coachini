// src/pages/Home.js

import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  const isAuthenticated = useSelector(state => state.users.isAuthenticated);

  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="content">
          <h1>Welcome to Coachini</h1>
          <p>Your platform for finding the perfect coach or becoming one yourself.</p>
        </div>
        <div className="buttons">
          <div>
            {isAuthenticated ? (
              <Link to="/dashboard" className="button">Go to Dashboard</Link>
            ) : (
              <>
                <Link to="/coach-registration" className="button">Register as a Coach</Link>
                <Link to="/client-registration" className="button">Register as a Client</Link>
              </>
            )}
          </div>
        </div>
        
      </div>
           
      <Footer />
  
    </div>
  );
};

export default Home;
