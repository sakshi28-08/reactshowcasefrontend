import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import './Login.css';
import loginlogo from "../images/loginlogo.png";
import msglogo from "../images/msglogo.png";
import passwordlogo from "../images/passwordlogo.png";
function Login() {
  
  
    const handleFormSubmit = (formdata) => {
      console.log("Form submitted!!");
      console.log(formdata);
  
      fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body : JSON.stringify(formdata),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if(res.status === 200){
          Swal.fire({
            icon : 'success',
            title : 'Success',
            text : 'Login Successful'
          })
          
  
        }else if(res.status === 300){
          Swal.fire({
            icon : 'error',
            title : 'Oops!!',
            text : 'Invalid Credentials'
          })
        }
      })
    };
    const loginSchema = Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(4, "Password should be longer than 4 characters")
        .required("Required"),
    });
  
  return (
    <div className="main">
     <div className="subject-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={loginlogo} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <Formik
                initialValues={{
                email: "",
                  password: "",
                   }} //specifying initial value for form
                onSubmit={handleFormSubmit} // function to handle form submission
                // validationSchema={loginSchema}
              >
                 {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
           <div>
             <img src={msglogo} alt="msglogo" className="email"/>
             <input type="text" placeholder="email" className="name"/>
           </div>
           <div className="second-input">
             <img src={passwordlogo} alt="password" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a><hr/>
            </p>
           
           </form>
           )}
         </Formik>
         </div>
         
       </div>
       

     </div>
    </div>
  );
}

export default Login;

