import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const useNotes = () => {
  const [publicNotes, setPublicNotes] = useState([]);
  const [publicNotesImages, setPublicNotesImages] = useState([]);
  useEffect(() => {
    const getPublicNotes = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/public");
        setPublicNotes(data.data);
        console.log(data.data);
        data.data.forEach(element => {
          if(element.imageId){
          axios.get(`http://localhost:8000/public/image/${element.imageId}`).then((data) => {
          console.log(data.data.imageData)
          
      
          setPublicNotesImages(data.data.imageData)
          console.log(publicNotesImages)
         })
          }
        });
       
      } catch (e) {
        console.error(e.message);
      }
    };
    getPublicNotes();
  }, []);

  return { publicNotes, setPublicNotes, publicNotesImages, setPublicNotesImages};
};
