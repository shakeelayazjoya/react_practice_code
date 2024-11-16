// UserCard.js
import React from "react";

const UserCard = (props) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Image */}
      <img
        src={props.user.img}
        alt={`${props.user.name}`}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          marginRight: "20px",
        }}
      />

      {/* User Information */}
      <div>
        <h3>{props.user.name}</h3>
        <p>Email: {props.user.email}</p>
        <p>Phone: {props.user.phone}</p>
        <p>Address: {props.user.address}</p>
      </div>
    </div>
  );
};

export default UserCard; // Default export
