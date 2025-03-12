import React from "react";
import UserCard from "./UserCard";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <UserCard
        name="Abebe"
        bio="Frontend Developer | Tech Enthusiast"
        image="https://via.placeholder.com/80"
      />
      <UserCard
        name="Kebede"
        bio="UI/UX Designer | Coffee Lover"
        image="https://via.placeholder.com/80"
      />
      <UserCard
        name="Ayele"
        bio="Full Stack Developer | Gamer"
        image="https://via.placeholder.com/80"
      />
    </div>
  );
};

export default App;
