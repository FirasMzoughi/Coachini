import React, { useState } from "react";
import ClientProfileMenu from "../components/ClientProfileMenu";
import HeaderClient from "../components/HeaderClient";
import "./UpdateInformation.css";

const UpdateInformation = () => {
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
    console.log("Updated Profile Data:", formData);
    // Add logic to save the updated profile data
  };

  return (
    <div className="update-information-container">
      <HeaderClient /> {/* Include the HeaderClient component */}
      <div className="update-information-content">
        <ClientProfileMenu /> {/* Include the ClientProfileMenu component */}
        <div className="update-information-main">
          <h2>Update Information</h2>
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
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInformation;
