import axios from "axios";

export const LoginService = async(loginData) => {
    const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/login`,
        loginData
      );
      return response
}

export const registerService = async(registerData) => {
    const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/users`,
        registerData
      );
      return response
}