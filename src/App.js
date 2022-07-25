import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes ,} from "react-router-dom";



import "./App.css";
import Addcomponent from "./Components/Addcomponent";
import Header from "./Components/Header";
import Listing from "./Components/Listing";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Aboutus from "./Components/Aboutus";
import Homepage from "./Components/Homepage";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Navbar from "./Components/Navbar";

function App() {


  return (
    <div>
    
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Signup/>} path="signup" />
            <Route element={<Login />} path="signin" />
            <Route element={<Addcomponent />} path="addcomponent" />
            <Route element={<Listing/>} path="listing" />
                       
            <Route element={<Aboutus/>} path="aboutus" />
            <Route element={<Homepage/>} path="home" />
            <Route element={<Contact/>} path="contact" />
            <Route element={<Service/>} path="service" />
           
            
           
            
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;

