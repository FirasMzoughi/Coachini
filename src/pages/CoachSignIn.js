import React, { useState } from "react";
import "./SignIn.css";
import Header from "../components/Header";

const CoachSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Coach sign-in data:", formData);
  };

  return (
    <div>
      <Header />
      <div className="sign-in-container">
        <h2>Coach Sign In</h2>
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

export default CoachSignIn;
