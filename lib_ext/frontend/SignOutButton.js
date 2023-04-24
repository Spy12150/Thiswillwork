import React from "react";
import { NavLink } from "react-router-dom";

function SignOutButton() {
  return (
    <div>
      <NavLink to="/login">Sign Out</NavLink>
    </div>
  );
}

export default SignOutButton;
