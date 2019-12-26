import React, { Component } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";

export class Users extends Component {
  state = {
    Users: []
  };

  getAllUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response =>
      this.setState({
        Users: response.data
      })
    );
  };

  componentDidMount = () => {
    this.getAllUsers();
  };
  render() {
    return (
      <div className="usersList">
        {this.state.Users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
