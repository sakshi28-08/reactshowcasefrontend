import { Switch } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div className="container-fluid">
   
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarRightAlignExample"
      aria-controls="navbarRightAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      
      
        
      
    </button>


    <div className="collapse navbar-collapse" id="navbarRightAlignExample">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
     
       
        
      </ul>
      
    </div>

  </div>

</nav>
    </div>
  )
}

export default Navbar;