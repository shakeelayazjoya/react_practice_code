// App.js
// import React from "react";
import userDetails from "./userDetails"; // Import userDetails array from userDetails.js
import UserCard from "./components/Usercard"; // Import UserCard component

const MapWithProps = () => {
  return (
    <div>
      <h1>User Details</h1>
      {userDetails.map((user, index) => (
        <UserCard key={index} user={user} /> // Pass the 'user' object as a prop to UserCard
      ))}
    </div>
  );
};

export default MapWithProps; // Default export
