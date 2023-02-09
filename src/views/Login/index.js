import "./style.css";
import swal from "sweetalert";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../Components/Footer";
import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";

import { useSession } from "../../context/sessionToken";

export const Login = () => {
  const [, setToken] = useSession();
  const navigate = useNavigate();

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  
  const handleInputChangeLogin = (e) => {
    let { name, value } = e.target;
      let newData = { ...loginData, [name]: value };
      setloginData(newData);
  };

  const handleSubmitLogin = async (e) => {
    
    e.preventDefault();
  
      try {
        const res= await axios.post("http://localhost:8000/login", loginData);
        const tokenResponse = res.data.data.token
        setToken(tokenResponse)
        navigate(`/panel`);
       
      } catch (error) {
        swal("An error has occured", error.response.data.message, "error");
      }
    
    }

  return (
    <div className="formLogin">
      <Header tituloVista="Login"></Header>
      <Form handleInputChangeFunction={handleInputChangeLogin} handleSubmitFunction={handleSubmitLogin} textoBoton="Login"></Form>
      <Footer></Footer>
    </div>
  );
};

