import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React, { useState} from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Addcomponent = () => {
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

<<<<<<< HEAD
        }
      
        return (
          <div style={{ background: "#eee", height: "100vh" }}>
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-muted text-center">Add Components</h3>
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
                            type="text"
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
                            multiline
                            rows={5}
                            type="text"
                            label="code"
                            placeholder="code"
                            id="code"
                            value={values.code}
                            onChange={handleChange}
                            error={Boolean(errors.code) && touched.code}
                            helperText={touched.code ? errors.code : ""}
                          />

                          <input type="file" onChange={uploadFile} /> 
      
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 5 }}
                          >
                            Add new component
                          </Button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
=======
  return (
    <div style={{ background: "#eee", height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-muted text-center">Form</h3>
              <hr />

              <Formik
                initialValues={{ title: "", description: "", code: "",thumbnail:"" }} //specifying initial value for form
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
                      type="text"
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
                      multiline
                      rows={5}
                      type="text"
                      label="code"
                      placeholder="code"
                      id="code"
                      value={values.code}
                      onChange={handleChange}
                      error={Boolean(errors.code) && touched.code}
                      helperText={touched.code ? errors.code : ""}
                    />

                    <input type="file" onChange={uploadFile} />

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
>>>>>>> 3c4b61116e009785faf8fcc2c6e15dcbaea2973a
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcomponent;
