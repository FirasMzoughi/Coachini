import React, { useState } from "react";
import ClientProfileMenu from "../components/ClientProfileMenu";
import HeaderClient from "../components/HeaderClient";
import "./WritePost.css";

const WritePost = () => {
  const [postContent, setPostContent] = useState("");

  const handleChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Posted content:", postContent);
    // Add logic to save the post content
  };

  return (
    <div className="write-post-container">
      <HeaderClient /> {/* Include the HeaderClient component */}
      <div className="write-post-content">
        <ClientProfileMenu /> {/* Include the ClientProfileMenu component */}
        <div className="write-post-main">
          <h2>Write Post</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={postContent}
              onChange={handleChange}
              placeholder="Write your post here..."
            ></textarea>
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WritePost;
