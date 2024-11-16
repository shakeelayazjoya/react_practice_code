// import React from "react";

const MapMethodone = () => {
  const array = [
    {
      name: "shakeel",
      email: "shakeel@gmail.com",
      phone: "123456789",
      address: "karachi",
    },
  ];
  return (
    <div>
      {/*
         {array.map((item, index) => (
          <ul key={index}>
            <li>name: {item.name}</li>
            <li>email: {item.email}</li>
            <li>phone: {item.phone}</li>
            <li>address: {item.address}</li>
          </ul>
        ))}
        */}

      {array.map((item, index) => (
        <ul key={index}>
          <li>{`name: ${item.name}, email: ${item.email}, phone: ${item.phone} , address: ${item.address}`}</li>
        </ul>
      ))}
    </div>
  );
};

export default MapMethodone;
