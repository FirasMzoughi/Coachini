import React from "react";
import ClientProfileMenu from "../components/ClientProfileMenu";
import HeaderClient from "../components/HeaderClient";
import "./FindCoach.css";

const FindCoach = () => {
  const coaches = [
    {
      name: "Coach A",
      specialty: "Strength Training",
      bio: "Experienced strength training coach with 10 years of experience.",
      picture: "path/to/coachA.jpg"
    },
    {
      name: "Coach B",
      specialty: "Yoga",
      bio: "Certified yoga instructor focused on holistic wellness.",
      picture: "path/to/coachB.jpg"
    },
    {
      name: "Coach C",
      specialty: "Cardio",
      bio: "Cardio expert helping clients achieve their fitness goals.",
      picture: "path/to/coachC.jpg"
    }
  ];

  return (
    <div className="find-coach-container">
      <HeaderClient /> {/* Include the HeaderClient component */}
      <div className="find-coach-content">
        <ClientProfileMenu /> {/* Include the ClientProfileMenu component */}
        <div className="find-coach-main">
          <h2>Find a Coach</h2>
          <div className="coaches-list">
            {coaches.map((coach, index) => (
              <div key={index} className="coach-card">
                <img src={coach.picture} alt={`${coach.name}`} className="coach-picture" />
                <div className="coach-info">
                  <h3>{coach.name}</h3>
                  <p><strong>Specialty:</strong> {coach.specialty}</p>
                  <p>{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCoach;
