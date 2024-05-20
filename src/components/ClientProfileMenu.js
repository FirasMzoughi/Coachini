import React from "react";
import { Link } from "react-router-dom";
import "./ClientProfileMenu.css";

const ClientProfileMenu = () => {
  return (
    <div className="client-profile-menu">
      <ul>
        <li>
          <Link to="/client-profile/posts">Posts</Link>
        </li>
        <li>
          <Link to="/client-profile/information">Information</Link>
        </li>
        <li>
          <Link to="/client-profile/find-coach">Find a Coach</Link>
        </li>
        <li>
          <Link to="/client-profile/update">Update Information</Link>
        </li>
        <li> {/* Add this list item for Write Post */}
          <Link to="/client-profile/write-post">Write Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientProfileMenu;
