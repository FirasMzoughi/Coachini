import React, { useState } from "react";
import "./CoachRegistration.css";
import Header from "../components/Header";

const CoachRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    expertise: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <div className="coach-registration-container">
        <h2>Register as a Coach</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
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
          <input
            type="text"
            name="expertise"
            placeholder="Expertise"
            value={formData.expertise}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default CoachRegistration;
