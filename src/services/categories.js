import axios from "axios"

export const getCategories = async () =>{
    const response = await axios.get(`${process.env.REACT_APP_BACKEND}/categories`)
    return response
}