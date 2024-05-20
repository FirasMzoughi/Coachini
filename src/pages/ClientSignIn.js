import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../components/Header"; // Import the Header component
import "./SignIn.css"; // (Optional) Import your CSS file for styling

const ClientSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here, e.g., calling an API to validate credentials

    // For demonstration purposes, let's assume authentication is successful
    // Redirect the user to their profile page after sign-in
    navigate("/client-profile");
  };

  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div className="sign-in-container">
        <h2>Client Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default ClientSignIn;
