import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

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
    <div className="mains">
      <div className="sub-mains">
        <div>
          <div>
            <Formik
              initialValues={{ title: "", description: "", code: "" }} //specifying initial value for form
              onSubmit={handleFormSubmit} // function to handle form submission
              // validationSchema={loginSchema}
            >
              {({ values, handleChange, handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <section
                    className="vh-100"
                    style={{ backgroundColor: "#eee" }}
                  >
                    <div className="container h-100">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                          <h1 className="text-black mb-4">Add Component</h1>
                          <div className="card" style={{ borderRadius: 15 }}>
                            <div className="card-body">
                              <div className="row align-items-center pt-4 pb-3">
                                <div className="col-md-3 ps-5">
                                  <h6 className="mb-0">title</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                  <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="title"
                                    onChange={handleChange}
                                    value={values.title}
                                  />
                                </div>
                              </div>
                              <hr className="mx-n3" />
                              <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                  <h6 className="mb-0">description</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                  <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="description"
                                    onChange={handleChange}
                                    value={values.description}
                                    placeholder="type.."
                                  />
                                </div>
                              </div>
                              <hr className="mx-n3" />
                              <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                  <h6 className="mb-0">code</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                  <textarea
                                    className="form-control"
                                    rows={3}
                                    placeholder="type here..."
                                    name="code"
                                    onChange={handleChange}
                                    value={values.code}
                                  />
                                </div>
                              </div>
                              <hr className="mx-n3" />
                              <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                  <h6 className="mb-0">Upload file</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                  <input
                                    className="form-control form-control-lg"
                                    type="file"
                                    onChange={uploadFile}
                                  />
                                  <div className="small text-muted mt-2">
                                    Upload your any other relevant file. Max
                                    file size 50 MB
                                  </div>
                                </div>
                              </div>
                              <hr className="mx-n3" />
                              <div className="px-5 py-4">
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-lg"
                                >
                                  Addcomponent
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addcomponent;
