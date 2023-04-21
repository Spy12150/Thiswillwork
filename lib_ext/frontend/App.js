import React, { useState } from "react";
import {Input, useBase, useRecords} from '@airtable/blocks/ui'
import {Route, Routes, NavLink} from "react-router-dom"
import LoginScreen from "./LoginScreen.js"
import SignOutButton from "./SignOutButton.js"
import MainPage from "./MainPage.js"



function App(){
   
 return (
    <div>
      <Routes>
          <Route exact path ="/" element={<LoginScreen/>}/>
          <Route exact path="/login" element={<LoginScreen/>}/>
          <Route exact path="/signout" element={<SignOutButton/>}/>
          <Route exact path="/mainpage" element={<MainPage/>}/>
      </Routes>
      
    </div>
  );


  
}

export default App;


