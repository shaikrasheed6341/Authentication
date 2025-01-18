
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";

import Signup from "./components/Signup.jsx";
import Landingpage from "./components/Landingpage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/landingpage' element={<Landingpage />} />
        
      </Routes>
    </BrowserRouter>


  )
}

export default App;
