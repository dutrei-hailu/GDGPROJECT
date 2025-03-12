import React from "react";
import "./UserCard.css";

const UserCard = ({ name, bio, }) => {
  return (
    <div className="user-card">
      
      <h2 className="user-name">{name}</h2>
      <p className="user-bio">{bio}</p>
    </div>
  );
};

export default UserCard;
