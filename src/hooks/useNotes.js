import { useState } from "react";
import axios from "axios";

export const useNotes = () => {
  const [Notes, setNotes] = useState([]);



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
  

  

  return { Notes, setNotes, getNotes };
};
