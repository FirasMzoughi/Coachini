import React from "react";
import ClientProfileMenu from "../components/ClientProfileMenu";
import HeaderClient from "../components/HeaderClient";
import "./Information.css";

const Information = () => {
  const clientData = {
    name: "John Doe",
    age: 30,
    height: "5'10\"",
    weight: "170 lbs",
    bodyType: "Athletic",
    profilePicture: "path/to/profile/picture.jpg"
  };

  return (
    <div className="information-container">
      <HeaderClient /> {/* Include the HeaderClient component */}
      <div className="information-content">
        <ClientProfileMenu /> {/* Include the ClientProfileMenu component */}
        <div className="information-main">
          <h2>Client Information</h2>
          <div className="profile-info">
            <img
              src={clientData.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <p><strong>Name:</strong> {clientData.name}</p>
            <p><strong>Age:</strong> {clientData.age}</p>
            <p><strong>Height:</strong> {clientData.height}</p>
            <p><strong>Weight:</strong> {clientData.weight}</p>
            <p><strong>Body Type:</strong> {clientData.bodyType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
