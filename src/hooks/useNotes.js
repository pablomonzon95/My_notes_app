import { useState } from "react";
import axios from "axios";

export const useNotes = () => {
  const [Notes, setNotes] = useState([]);
  const [UserNote, setUserNote] = useState({
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

  const token = `Bearer ${localStorage.getItem("token")}`;

    const getNotes = async () => {
      const token = `Bearer ${localStorage.getItem("token")}`;

      if (token !== "Bearer null") {
        try {
          const token = `Bearer ${localStorage.getItem("token")}`;
          const { data } = await axios.get(
            `${process.env.REACT_APP_BACKEND}/notes`,
            {
              headers: {
                authorization: token,
              },
            }
          );
          setNotes(data.data);
          
        } catch (e) {
          console.error(e.message);
        }
      }
    };
  

  const getNote = async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND}/note/${id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(response.data.data)
    setUserNote({...UserNote,...response.data.data});
 
 
  };

  return { Notes, setNotes, getNotes, getNote, UserNote, setUserNote };
};
