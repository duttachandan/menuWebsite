import React from 'react'
import Menubar from "./components/Menubar.js";
import {items} from "./components/Items.js"
import { Routes, Route, HashRouter} from 'react-router-dom';
import Error from "./Error.js";
import Sign from "./SignIn/Sign.js";

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Menubar element={items}/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route element={<Error/>}/>
      </Routes>
    </HashRouter>
  ) 
}

export default App;
