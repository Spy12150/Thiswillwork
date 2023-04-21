import React, { useState } from "react";
import {Route, Routes, NavLink} from "react-router-dom"


function LoginScreen(props) {
    return (
        <div>
            
            <div>
            Easy Rebalance!
            </div>
            <div>
                The final solution for every librarian's favorite problem: too many books!
            </div>
            <div>
        <label htmlFor="input1">Librarian ID Number:</label>
       <input
          id="Librarian ID Number"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="input2">Password:</label>
       <input
          id="Password"
          type="text"
        />
      </div>
      <button>
         <NavLink to="/mainpage">Log In</NavLink>
      </button>
        </div>

    );
};

export default LoginScreen
