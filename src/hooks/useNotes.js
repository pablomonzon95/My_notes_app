import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const useNotes = () => {
  const [publicNotes, setPublicNotes] = useState([]);
  useEffect(() => {
    const getPublicNotes = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/public");
        setPublicNotes(data.data);
        console.log(data.data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getPublicNotes();
  }, []);

  return { publicNotes, setPublicNotes };
};
