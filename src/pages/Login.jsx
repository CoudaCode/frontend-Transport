import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./../Register.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./../Components/header/Navbar";
import Footer from "./../Components/footer/Footer";
function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  // Fonction Pour les Toast
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://backendapitransport.onrender.com/user/Login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <>
      <Navbar/>
      <div
        className=".form_container"
        style={{ width: "18rem", margin: "10% auto" }}
      >
        <h2>S'enregister</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              placeholder="Entrer Votre Email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-1">
            Submit
          </button>
          <br />
          <span>
            Vous n'avez pas de compte? <Link to={"/Register"}>S'inscrire</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
      <Footer/>
    </>
  );
}

export default Login;
