import React from "react";
import "./UserPost.css";

import { Link } from "react-router-dom";
function UserPost(props) {
  // const { post } = props.post;
  // console.log("props in UserPost:", post);
  return (
    <div className="postBox">
      <img
        src="https://blog.cloudflare.com/content/images/2019/06/post-quantum-_1@2x.png"
        alt="postImg"
        className="postImg"
      />
      <h4 className="postTitle">{props.post.title}</h4>
      <p className="postContent">{props.post.body}</p>
      <p className="postDate">Dec 26, 2019</p>
      <Link to={`/${props.userId}/${props.post.id}`}>
        <button type="button" className="btn btn-primary btn-comments">
          Comments
        </button>
      </Link>
    </div>
  );
}

export default UserPost;
