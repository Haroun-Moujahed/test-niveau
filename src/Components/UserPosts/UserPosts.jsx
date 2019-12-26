import React from "react";
import UserPost from "./UserPost";
import "./UserPosts.css";

import { Link } from "react-router-dom";
import axios from "axios";

class UserPosts extends React.Component {
  state = {
    posts: []
  };
  getAllPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(response =>
      this.setState({
        posts: response.data
      })
    );
  };
  componentDidMount = () => {
    this.getAllPosts();
  };
  render() {
    return (
      <div>
        <Link to="/">
          <button type="button" className="btn btn-danger back-btn">
            Back
          </button>
        </Link>
        <div className="postsList">
          {this.state.posts.map((post, index) => {
            return post.userId.toString() ===
              this.props.match.params.userId.toString() ? (
              <UserPost key={index} post={post} />
            ) : (
              <div key={index}></div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserPosts;
