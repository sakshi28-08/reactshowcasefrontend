import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React, { useState} from "react";
import c2 from "../images/c2.png";
import msglogo from "../images/msglogo.png";
import passwordlogo from "../images/passwordlogo.png";
import Swal from "sweetalert2";
import * as Yup from "yup";
import './Addcomponent.css';

function Addcomponent() {
  const [thumbnail, setThumbnail] = useState("");

  const handleFormSubmit = (formdata) => {
    formdata.thumbnail = thumbnail;
    console.log("Form submitted!!");
    console.log(formdata);

    fetch("http://localhost:5000/component/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successful",
        });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Invalid Credentials",
        });
      }
    });
  };

  // for validation
  const loginSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string()
      .min(4, "Password should be longer than 4 characters")
      .required("Required"),
  });

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setThumbnail(file.name);

    fd.append("file", file);

    const response = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    if (response.status == 200) {
      console.log("file upload success");
    }
  };


        
        
      
        return (
          <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={c2} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Addcomponent Page</h1>
      
                    <Formik
                      initialValues={{ title: "", description: "", code: ""}} //specifying initial value for form
                      onSubmit={handleFormSubmit} // function to handle form submission
                      validationSchema={loginSchema}
                    >
                      {({ values, handleChange, handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                         
                          
                          <div className="second-input">
             <img src={passwordlogo} alt="password" className="email"/>
             <input type="password" placeholder="title" className="name"/>
           </div>
           <div className="second-input">
             <img src={passwordlogo} alt="password" className="email"/>
             <input type="password" placeholder="description" className="name"/>
           </div>
           <div className="second-input">
             <img src={passwordlogo} alt="password" className="email"/>
             <input type="password" placeholder="code" className="name"/>
           </div>
           <input className="the" type="file" onChange={uploadFile} /> 

           <div className="login-button">
          <button>Add new component</button>
          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>

              </div>
              
        )
                      }
        
                      


export default Addcomponent;

