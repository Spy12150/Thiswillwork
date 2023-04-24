import "./MainPage.css"
import React from "react";
import {NavLink} from "react-router-dom"

function MainPage() {
  return (
    <div className="container">
  <h1>Main Page</h1>
  <div className="button-container">
    
    <NavLink to="/input" className="main-button">
        Input Books
    </NavLink>
    <NavLink to="/remove" className="main-button">
        Remove Books
    </NavLink>
    <NavLink to="/rebalance" className="main-button">
        Rebalance Books
    </NavLink>
    <NavLink to="/Login" className="main-button">
        Sign out
    </NavLink>
  </div>
</div>
  );
}

export default MainPage;
