import React from 'react'
import Footer from './components/Common/Footer';
import Navbar from './components/Common/Navbar';
import Path from './Paths/Path';
// import EmailVerify from "./components/EmailVerify/EmailVerify";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Path/>
      <Footer/>

      {/* <Routes>
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      </Routes> */}
    </>
  );
}

export default App;
