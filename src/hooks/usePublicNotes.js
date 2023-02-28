import { useState } from "react";
import { getNoteService, getPublicNotesService } from "../services/notes";

// Hook usado para obtener las notas que iran en el MainPage y para obtener la informacion de una nota en especìfico

export const usePublicNotes = () => {
  const [publicNotes, setPublicNotes] = useState([]);
  const [publicNote, setPublicNote] = useState({
    id: "",
    title: "",
    note: "",
    image: "",
    public: "",
    userId: "",
    categoryId: "",
    deleteImage: "",
  });

  const getNote = async (id) => {
    try {
      const response = await getNoteService(id);

      setPublicNote({ ...publicNote, ...response.data.data });
    } catch (e) {
      console.error(e.message);
    }
  };

  const getPublicNotes = async () => {
    try {
      const response = await getPublicNotesService();
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
