import { useState } from "react";
import { getNotesService } from "../services/notes";

export const useNotes = () => {
  const [Notes, setNotes] = useState([]);



    const getNotes = async () => {
      const token = `Bearer ${localStorage.getItem("token")}`;

      if (token !== "Bearer null") {
        try {
          
         const response = await getNotesService()
        
         setNotes(response.data.data)
       
          
        } catch (e) {
          console.error(e.message);
        } 
      
      }
     
    };
  

  

  return { Notes, setNotes, getNotes };
};
