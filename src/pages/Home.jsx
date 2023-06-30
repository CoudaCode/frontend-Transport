import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./../Components/header/Navbar";
import Footer from "./../Components/footer/Footer";
function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log(cookies.token);
    const verifyCookie = async () =>{
      // Verification si la cookie exites
      if (!cookies.token){
        navigate("/login");
      }
      const { data } = await axios.post(
        "https://backendapitransport.onrender.com/user",
        {},
        { withCredentials:true}
      );
      const { status, user } = data;
      console.log(data);
      setUsername(`${user.name} ${user.lastname}`);
      return status
        ? toast(`Hello ${user.name} ${user.lastname}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/Register");
  };

  const notify = () => toast("Wow so easy!");
  return (

    
    <>
      <Navbar/>
      <div className="home_page" style={{ width: "100%", textAlign: "center" }}>
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />

      <Footer/>
    </>
  );
}

export default Home;
