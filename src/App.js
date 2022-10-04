import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes ,} from "react-router-dom";



import "./App.css";

import Addcomponent from "./Components/Addcomponent";
import Header from "./Components/Header";
import Listing from "./Components/Listing";
import Signup from "./Components/Signup";
import Aboutus from "./Components/Aboutus";
import Homepage from "./Components/Homepage";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import LoginForm from "./Components/LoginForm";
import Viewer from "./Components/Viewer";
import ManageUser from "./Components/ManageUser";


function App() {


  return (
    <div>
    
        <BrowserRouter>
          <Header />
          <Routes>
             <Route element={<Homepage/>} path="/" />
            <Route element={<Signup/>} path="signup" />         
            <Route element={<Addcomponent />} path="addcomponent" />
            <Route element={<Listing/>} path="listing" />
            <Route element={<Service/>} path="service" />
            <Route element={<Aboutus/>} path="aboutus" />
            <Route element={<Homepage/>} path="home" />
            <Route element={<Contact/>} path="contact" />
            <Route element={<LoginForm/>} path="LoginForm" />
            <Route element={<Viewer/>} path="Viewer/:id" />
            <Route element={<ManageUser/>} path="ManageUser" />
           
            
           
            
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;

