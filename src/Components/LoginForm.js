import { Formik } from "formik";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

function LoginForm() {
  const handleFormSubmit = (formdata) => {
    console.log("Form submitted!!");
    console.log(formdata);

    fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success 😀",
          text: "Login Successful",
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
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(4, "Password should be longer than 4 characters")
      .required("Required"),
  });

  return (
    <div className="mains">
      <div classNameName="sub-mains">
        <div>
          <div className="imgs"></div>
          <div>
            <Formik
              initialValues={{
                email: "",
                password: "",

                createdAt: new Date(),
              }} //specifying initial value for form
              onSubmit={handleFormSubmit} // function to handle form submission
              // validationSchema={loginSchema}
            >
              {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <section
                    className="vh-100"
                    style={{ backgroundColor: "#eee" }}
                  >
                    <div className="container h-100">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                          <div
                            className="card text-black"
                            style={{ borderRadius: 25 }}
                          >
                            <div className="card-body p-md-5">
                              <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                    Login Form
                                  </p>
                                  <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                    <div className="d-flex flex-row align-items-center mb-4"></div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                      <div className="form-outline flex-fill mb-0">
                                        <TextField
                                          id="email"
                                          label="email"
                                          variant="outlined"
                                          value={values.email}
                                          onChange={handleChange}
                                          fullWidth
                                          focused
                                        />
                                      </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                      <div className="form-outline flex-fill mb-0">
                                        <TextField
                                          id="password"
                                          label="password"
                                          variant="outlined"
                                          value={values.password}
                                          onChange={handleChange}
                                          fullWidth
                                          focused
                                        />
                                      </div>
                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-5">
                                      <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="form2Example3c"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="form2Example3"
                                      >
                                        I agree all statements in{" "}
                                        <a href="#!">Terms of service</a>
                                      </label>
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                      <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                      >
                                        Login
                                      </button>
                                    </div>
                                  </form>
                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                    className="img-fluid"
                                    alt="Sample image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
