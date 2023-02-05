import "./style.css";
import { useState } from "react";
import axios from "axios";

import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";


export const Register = () => {
  
  const [registerData, setregisterData] = useState({
    email: '',
    password: '',
  })

  const handleInputChangeRegister = (e) => {
    let {name, value} = e.target
    let newData = {...registerData, [name]:value}
    setregisterData(newData)
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    if(!e.target.checkValidity()){
      console.log('Alguno de los campos de registro esta mal')
    } else {
      let res = await axios.post('http://localhost:8000/users' , registerData)
      console.log(res.data)
    }

  }

  return (
    <div className="formRegister">
      <Header></Header>
      <Form handleInputChangeFunction = {handleInputChangeRegister} handleSubmitFunction = {handleSubmitRegister}
      textoBoton="Register">
       { /* <div className="extra-input">
          <label htmlFor="repetiremail"> Repetir Contraseña</label>
          <input  type="password" id="repetiremail" name="repetiremail" ></input>
  </div> */}
      </Form>
      <Footer></Footer>
    </div>
  );
};
