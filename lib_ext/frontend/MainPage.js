import "./MainPage.css"
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {Button, Input, useBase, useRecords} from '@airtable/blocks/ui'
import {NavLink} from "react-router-dom"

//gg + league sucks + ratio
function MainPage() {
  return (
    <div className="container">
      <h1>Main Page</h1>
      <div className="button-container">
        <button className="main-button">
          <NavLink to="/input" className="InputLink">
            Input Books
          </NavLink>
        </button>
        <button className="main-button">
          <NavLink to="/remove" className="SignoutLink">
            Remove Books
          </NavLink>
        </button>
        <button className="main-button">
          <NavLink to="/rebalance" className="SignoutLink">
            Rebalance Books
          </NavLink>
        </button>
        <button className="main-button">
          <NavLink to="/Login" className="SignoutLink">
            Sign out
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default MainPage;
