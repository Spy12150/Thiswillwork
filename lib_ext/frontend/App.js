import React, { useState } from "react";
import {Input, useBase, useRecords} from '@airtable/blocks/ui'
import {Route, Routes, NavLink} from "react-router-dom"
import LoginScreen from "./LoginScreen.js"
import SignOutButton from "./SignOutButton.js"
import MainPage from "./MainPage.js"



function App(){
   
 return (
    <div>
      <NavLink to="/login">Sign Out</NavLink>
      <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route exact path="/signout" element={<SignOutButton/>}/>
          <Route exact path ="/login" element={<LoginScreen/>}/>
      </Routes>
      
    </div>
  );

  /*
  
  */

  
}

export default App;


