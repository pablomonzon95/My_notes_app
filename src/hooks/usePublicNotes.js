import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const usePublicNotes = () => {
  const [publicNotes, setPublicNotes] = useState([]);
  useEffect(() => {
    const getPublicNotes = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/public");
        setPublicNotes(data.data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getPublicNotes();
  }, []);

  return { publicNotes, setPublicNotes };
};
