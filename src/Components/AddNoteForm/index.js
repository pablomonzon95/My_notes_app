import "./style.css";
import swal from "sweetalert";

import { useEffect, useState } from "react";
import { getCategoriesService } from "../../services/categories";
import { postNoteService } from "../../services/notes";

export const AddNoteForm = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const results = await getCategoriesService();
      setCategories(results.data.data);
    };

    loadCategories();
  }, [categories]);



  const handleSubmitaddNoteData = async (e) => {
    e.preventDefault();

    const form = e.target;
    const payload = new FormData(form);

    try {
      postNoteService(payload)

      form.reset();
    } catch (error) {
      swal("An error has occured", error.response.data.message, "error");
    }
  };

  return (
    <div className="note_form">
      <form onSubmit={handleSubmitaddNoteData}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required></input>
        <label htmlFor="note">Note</label>
        <input type="text" name="note" id="note" required></input>
        <label htmlFor="public">Public?</label>
        <input type="checkbox" name="public" id="public"></input>
        <label htmlFor="categoryId">Category</label>
        <select required name="categoryId" id="categoryId">
          {categories.map((category) => {
            return <option key={category.id} value={category.id}>{category.name}</option>;
          })}
        </select>
        <label htmlFor="addImage"></label>
        <input type="file" name="image" id="addImage"></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
