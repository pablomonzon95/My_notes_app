import { useState } from "react"
import axios from "axios"

export const useNotes = () => {
const [publicNotes, setPublicNotes] = useState([]);
const getPublicNotes = async () => {
    try {
     
        const { data } = await axios.get('https://api.escuelajs.co/api/v1/products')
        setProducts(data)
    } catch (e) {
        return {}
    }
}
}