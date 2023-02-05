import "./style.css";
import { Footer } from "../../Components/Footer";
import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";
export const Login = () => {
  return (
    <div className="formLogin">
      <Header></Header>
      <Form textoBoton="Login"></Form>
      <Footer></Footer>
    </div>
  );
};
