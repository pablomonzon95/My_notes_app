import { useState } from "react";
import { getNoteService, getPublicNotesService } from "../services/notes";

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
  
  const getNote = async (id) => {
    try {
      const response = getNoteService(id)

      setPublicNote({...publicNote, ...response.data.data});
     
    } catch (e) {
      console.error(e.message);
    }
  };

  const getPublicNotes = async () => {
    try {
      const response = await getPublicNotesService()
      setPublicNotes(response.data.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  return {
    publicNotes,
    setPublicNotes,
    getNote,
    publicNote,
    getPublicNotes,
  };
};
