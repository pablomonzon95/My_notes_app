import { useState } from "react";
import { getNotesService } from "../services/notes";

// Hook usado para obtener las notas que iran en el UserPanel

export const useNotes = () => {

  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const token = `Bearer ${localStorage.getItem("token")}`;

    if (token !== "Bearer null") {
      try {
        const response = await getNotesService();

        setNotes(response.data.data);
      } catch (e) {
        console.error(e.message);
      }
    }
  };

  return { notes, setNotes, getNotes };
};
