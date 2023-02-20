import "./style.css";
import swal from "sweetalert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../Components/Footer";
import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";

import { useSession } from "../../context/sessionToken";
import { LoginService } from "../../services/users";

export const Login = () => {
  const [, setToken, , setAdminId] = useSession();
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
      const response = await LoginService(loginData);
      
      const tokenResponse = response.data.data.token;
      const adminId = response.data.id

      setToken(tokenResponse);
      setAdminId(adminId)
      
      navigate(`/panel`);
    } catch (error) {
      swal("An error has occured", error.response.data.message, "error");
    }
  };

  return (
    <div className="form_login">
      <Header viewtitle="Login"></Header>

      <Form
        handleInputChangeFunction={handleInputChangeLogin}
        handleSubmitFunction={handleSubmitLogin}
        textoBoton="Login"
      ></Form>
      <Footer></Footer>
    </div>
  );
};
