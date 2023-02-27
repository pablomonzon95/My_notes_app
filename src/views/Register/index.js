import "./style.css";
import swal from "sweetalert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormLoginAndRegister } from "../../Components/FormLoginAndRegister";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { registerService } from "../../services/users";

export const Register = () => {
  const navigate = useNavigate();

  const [registerData, setregisterData] = useState({
    email: "",
    password: "",
  });

  const handleInputChangeRegister = (e) => {
    let { name, value } = e.target;
    if (name !== "repeatpassword") {
      let newData = { ...registerData, [name]: value };
      setregisterData(newData);
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const password1 = e.target.password.value;
    const password2 = e.target.repeatpassword.value;

    if (password1 === password2) {
      try {
        await registerService(registerData)
        swal(
          "Register Successful",
          "please go to your email to activate your account",
          "success"
        );
        navigate(`/login`);
      } catch (error) {
        swal("An error has occured", error.response.data.message, "error");
      }
    } else {
      swal("paswords must be the same", "please check them out", "error");
    }
  };
  return (
    <div className="form_register">
      <Header viewtitle="Register"></Header>
      <FormLoginAndRegister
        handleInputChangeFunction={handleInputChangeRegister}
        handleSubmitFunction={handleSubmitRegister}
        textoBoton="Register"
      >
        <div className="extra_input">
          <label htmlFor="repeatpasswordId"> Repetir Contraseña</label>
          <input
            type="password"
            id="repeatpasswordId"
            name="repeatpassword"
          ></input>
        </div>
      </FormLoginAndRegister>
      <Footer></Footer>
    </div>
  );
};
