import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Azarias A'Neals",
    email: "Azarias.P.Aneals@seattlecolleges.edu",
    address: {
      street: "1234 ABC St.",
      city: "Seattle",
      country: "USA",
    },
  });

  const [street, setStreet] = useState(userProfile.address.street);
  const [city, setCity] = useState(userProfile.address.city);
  const [country, setCountry] = useState(userProfile.address.country);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserProfile((prev) => ({
      ...prev,
      address: { street, city, country },
    }));
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Address: {userProfile.address.street}, {userProfile.address.city}, {userProfile.address.country}</p>

      <h2>Update Address</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street" required />
        <br />
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
        <br />
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
        <br />
        <button type="submit">Update Address</button>
      </form>
    </div>
  );
};

export default UserProfile;
