import React, { useState } from "react";
import {Route, Routes, NavLink} from "react-router-dom"
import "./LoginScreen.css"
//gg + league sucks + ratio
function LoginScreen(props) {
  return (
    <div className="LoginContainer">
      <div className="LoginTitle"> EASYSORT</div>
      <div className="LoginSubtitle">
        The final solution for every librarian's favorite problem: too many books!
      </div>
      <div className="form">
        <div className="form-group">
          <label className="LibrarianIdNumber" htmlFor="input1">Librarian ID Number:</label>
          <input id="Librarian ID Number" type="text" />
        </div>
        <div className="form-group">
          <labeRel htmlFor="input2">Password:</labeRel>
          <input id="Password" type="text" />
        </div>
        <button>
          <NavLink to="/mainpage" className="LogInLink">
            Log In
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
