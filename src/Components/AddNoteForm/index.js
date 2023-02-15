
import swal from "sweetalert";
import axios from "axios";
import { useEffect, useState} from "react"
import { getCategories } from "../../services/categories";

export const AddNoteForm = () => {

  const [categories, setCategories] = useState([])
  

  useEffect(() => {
    const loadCategories = async () =>{
     const results = await  getCategories()
     setCategories(results.data.data)
    }
    
    loadCategories();
  }, [])
 
  console.log(categories)



  const handleSubmitaddNoteData = async (e) => {
    e.preventDefault();

    const form = e.target;
    const token = `Bearer ${localStorage.getItem("token")}`;
    const payload = new FormData(form);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND}/notes`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      );

      console.log(data);

      form.reset();
    } catch (error) {
      swal("An error has occured", error.response.data.message, "error");
    }

  
  };

  return (
    <form onSubmit={handleSubmitaddNoteData}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        required
       
      ></input>
      <label htmlFor="note">Note</label>
      <input
        type="text"
        name="note"
        id="note"
        required

      ></input>
      <label htmlFor="public">Public?</label>
      <input
        type="checkbox"
        name="public"
        id="public"
     
      ></input>
      <label htmlFor="categoryId">Category</label>
      <select
      
        required
        name="categoryId"
        id="categoryId"
      
      >
      {categories.map((category) => {
        return <option>{category.name}</option>
      })}
      </select>
      <label htmlFor="addImage"></label>
      <input
        type="file"
        name="image"
        id="addImage"
      ></input>
      <button type="submit">Send</button>
    </form>
  );
};
