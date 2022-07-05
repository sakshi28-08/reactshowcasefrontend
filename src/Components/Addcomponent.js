
import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Addcomponent = () => {
  
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
                text : 'Successful'
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
      
      
        // for validation
        const loginSchema = Yup.object().shape({
          title: Yup.string().required("Required"),
          description: Yup.string()
            .min(4, "Password should be longer than 4 characters")
            .required("Required"),
        });
      
        return (
          <div style={{ background: "#eee", height: "100vh" }}>
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-muted text-center">Form</h3>
                    <hr />
      
                    <Formik
                      initialValues={{ title: "", description: "", code: ""}} //specifying initial value for form
                      onSubmit={handleFormSubmit} // function to handle form submission
                      validationSchema={loginSchema}
                    >
                      {({ values, handleChange, handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                          <TextField
                            sx={{ mt: 3 }}
                            fullWidth
                            label="title"
                            placeholder="title"
                            id="title"
                            value={values.title}
                            onChange={handleChange}
                            error={Boolean(errors.title) && touched.title}
                            helperText={touched.title ? errors.title : ""}
                          />
      
                          <TextField
                            sx={{ mt: 3 }}
                            fullWidth
                            type="description"
                            label="description"
                            placeholder="description"
                            id="description"
                            value={values.description}
                            onChange={handleChange}
                            error={Boolean(errors.description) && touched.description}
                            helperText={touched.description ? errors.description : ""}
                          />
                          <TextField
                            sx={{ mt: 3 }}
                            fullWidth
                            type="code"
                            label="code"
                            placeholder="code"
                            id="code"
                            value={values.code}
                            onChange={handleChange}
                            error={Boolean(errors.code) && touched.code}
                            helperText={touched.code ? errors.code : ""}
                          />
      
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 5 }}
                          >
                            Click
                          </Button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
  
}

export default Addcomponent