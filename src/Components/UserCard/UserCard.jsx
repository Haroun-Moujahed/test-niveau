import React from "react";
import "./UserCard.css";
import { Link } from "react-router-dom";

function UserCard(props) {
  const { user } = props;
  return (
    <div className="userCard">
      <img
        src="https://www.mentoring.org/new-site/wp-content/uploads/2019/05/default-user-300x300.png"
        alt="userPhoto"
        className="userPhoto"
      />
      <h2>{user.name}</h2>
      <h3>{user.company.bs}</h3>
      <p>{user.company.catchPhrase}</p>
      <Link to={`/${user.id}`}>
        <button type="button" className="btn btn-success">
          Posts
        </button>
      </Link>
    </div>
  );
}

export default UserCard;
