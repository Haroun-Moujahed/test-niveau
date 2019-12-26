import React from "react";
import "./UserPost.css";

function UserPost(props) {
  const { post } = props;
  return (
    <div className="postBox">
      <img
        src="https://blog.cloudflare.com/content/images/2019/06/post-quantum-_1@2x.png"
        alt="postImg"
        className="postImg"
      />
      <h4 className="postTitle">{post.title}</h4>
      <p className="postContent">{post.body}</p>
      <p className="postDate">Dec 26, 2019</p>
    </div>
  );
}

export default UserPost;
