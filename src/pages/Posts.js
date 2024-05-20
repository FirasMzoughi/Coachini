import React, { useState } from "react";
import ClientProfileMenu from "../components/ClientProfileMenu"; // Import ClientProfileMenu
import HeaderClient from "../components/HeaderClient"; // Import HeaderClient
import "./Posts.css"; // Import CSS for the Posts page

const Posts = () => {
  const [posts, setPosts] = useState([
    { id: 1, content: "First post content here." },
    { id: 2, content: "Second post content here." },
    // Add more posts as needed
  ]);

  return (
    <div className="posts-container">
      <HeaderClient /> {/* Include HeaderClient */}
      <div className="posts-content">
        <ClientProfileMenu /> {/* Include ClientProfileMenu */}
        <div className="posts-main">
          <h2>Posts</h2>
          <div className="posts-list">
            {posts.map((post) => (
              <div key={post.id} className="post-item">
                {post.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
