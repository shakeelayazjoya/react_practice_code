// import React from "react";

const App = () => {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Sam Wilson",
      email: "sam@example.com",
      phone: "555-123-4567",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const people = [
    {
      name: "John Doe",
      img: "https://randomuser.me/api/portraits/men/1.jpg", // default image 1
      phone: "46376854 ",
    },
    {
      name: "Jane Smith",

      img: "https://randomuser.me/api/portraits/women/2.jpg", // default image 2
      phone: "46376854 ",
    },
    {
      name: "Sam Wilson",
      img: "https://randomuser.me/api/portraits/men/3.jpg", // default image 3
      phone: "46376854 ",
    },
  ];

  return (
    <div>
      <h1>User Details</h1>
      {users.map((user, index) => (
        <div
          key={index}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <img
            src={user.img}
            alt={user.name}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
      <h1>user two details </h1>

      {people.map((person, value) => (
        <div
          key={value}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <img src={person.img} alt="img" />
          <h3>{person.name}</h3>
          <p>{person.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
