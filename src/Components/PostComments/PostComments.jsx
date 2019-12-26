import React, { Component } from "react";
import axios from "axios";
import "./PostComments.css";

export class PostComments extends Component {
  state = {
    comments: []
  };

  getAllComments = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then(response =>
      this.setState({
        comments: response.data
      })
    );
  };
  componentDidMount = () => {
    this.getAllComments();
  };
  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => {
          return comment.postId.toString() ===
            this.props.match.params.postId.toString() ? (
            <div key={index} className="commentBox">
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </div>
          ) : (
            <div key={index}></div>
          );
        })}
      </div>
    );
  }
}

export default PostComments;
