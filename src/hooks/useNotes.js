import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const useNotes = () => {
  const [Notes, setNotes] = useState([]);
  const [UserNote, setUserNote] = useState({});

  const token = `Bearer ${localStorage.getItem("token")}`
  useEffect(() => {
    const getNotes = async () => {
        
        const token = `Bearer ${localStorage.getItem("token")}`
       
     if (token !== "Bearer null") {
        try {
            const token = `Bearer ${localStorage.getItem("token")}`
        const { data } = await axios.get("http://localhost:8000/notes",  {
            headers: {
              authorization:token
            }
          } );
        setNotes(data.data);
   
      } catch (e) {
        console.error(e.message);
      } }
    };
    getNotes();
  }, []);

  const getNoteById = async (id) => {
    const response = await axios.get(`http://localhost:8000/note/${id}`,  {
        headers: {
          authorization:token
        }
      } );
      const data = response.data.data
      
      setUserNote(...[data])
     console.log(UserNote)
     
      
      
    
  }

  return { Notes, setNotes, getNoteById, UserNote, setUserNote };
};
