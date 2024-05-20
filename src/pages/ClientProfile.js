import React, { useState } from "react";
import ClientProfileMenu from "../components/ClientProfileMenu"; // Import ClientProfileMenu
import "./ClientProfile.css";

import HeaderClient from "../components/HeaderClient";

const ClientProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    bodyType: "",
    profilePicture: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Client Profile Data:", formData);
  };

  return (
    <div className="client-profile-container">
    
      <HeaderClient/>
      <ClientProfileMenu /> {/* Include the ClientProfileMenu component */}
      <div className="client-profile-content">
        <h2>Client Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="height"
            placeholder="Height"
            value={formData.height}
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            placeholder="Weight"
            value={formData.weight}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bodyType"
            placeholder="Body Type"
            value={formData.bodyType}
            onChange={handleChange}
          />
          <input
            type="file"
            name="profilePicture"
            onChange={(e) => setFormData({ ...formData, profilePicture: e.target.files[0] })}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ClientProfile;
