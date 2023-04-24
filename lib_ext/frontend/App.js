import React from "react";
import {Route, Routes} from "react-router-dom"
import LoginScreen from "./LoginScreen.js"
import SignOutButton from "./SignOutButton.js"
import InputOutput from "./Input.js"
import MainPage from "./MainPage.js"
import RemoveRecord from "./Remove.js"
import Rebalancer from "./Rebalance.js"

function App(){
   
 return (
    <div>
      <Routes>
          <Route exact path ="/" element={<LoginScreen/>}/>
          <Route exact path="/login" element={<LoginScreen/>}/>
          <Route exact path="/signout" element={<SignOutButton/>}/>
          <Route exact path="/remove" element={<RemoveRecord/>} />
          <Route exact path="/input" element={<InputOutput/>} />
          <Route exact path="/mainpage" element={<MainPage/>}/>
          <Route exact path="/rebalance" element={<Rebalancer/>}/>
      </Routes>
    </div>
  );


  


  
}

export default App;


