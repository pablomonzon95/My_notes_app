import { useState } from "react";
import axios from "axios";

export const usePublicNotes = () => {
  const [publicNotes, setPublicNotes] = useState([]);
  const [publicNote, setPublicNote] = useState({
    id: "",
    title:"",
    note:"",
    image:"",
    imageId: "",
    imageData:"",
    public:"",
    userId:"",
    categoryId:""

  });
  
  const getPublicNote = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/public/${id}`
      );
      
      setPublicNote({...publicNote, ...response.data.data});
    

     
    } catch (e) {
      console.error(e.message);
    }
  };

  const getPublicNotes = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND}/public`
      );
      setPublicNotes(data.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  return {
    publicNotes,
    setPublicNotes,
    getPublicNote,
    publicNote,
    getPublicNotes,
  };
};
