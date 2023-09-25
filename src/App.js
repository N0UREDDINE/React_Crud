import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import AddUser from "./componenets.js/add"; // Updated import for AddUser component
import Edit from "./componenets.js/edit";
import Details from "./componenets.js/details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:id" element={<Details />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<Edit />} />
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
