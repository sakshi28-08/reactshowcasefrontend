import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Addcomponent from "./Components/Addcomponent";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const mytheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#133c68",
      },
    },
  });

  const mytheme2 = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#133c68",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme ? mytheme2 : mytheme}>
        <BrowserRouter>
          {/* <Link to="/signin">Go to Login Page</Link>
        <NavLink to="/homepage">Go to Home Page</NavLink> */}
          
          <Routes>
            <Route element={<Signup/>} path="register" />
            <Route element={<Login />} path="signin" />
            <Route element={<Addcomponent Addcomponent />} path="addcomponent" />
       

           
            {/*navigation */}
            {/* <Route element={<Navigate to="/404" />} path="*" /> */}
            <Route element={<Navigate to="/signin" />} path="/" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

