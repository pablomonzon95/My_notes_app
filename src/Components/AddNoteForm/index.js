import "./style.css";
import swal from "sweetalert";

import { useEffect, useState } from "react";
import { getCategoriesService } from "../../services/categories";
import { postNoteService, editNoteService } from "../../services/notes";
import { useModal } from "../../context/ModalContext";

export const AddNoteForm = (id) => {
  const [categories, setCategories] = useState([]);
  const [modal, setModal] = useModal();
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
      modal === null
        ? await postNoteService(payload)
        : await editNoteService(id.id, payload);

      form.reset();
    } catch (error) {
      swal("An error has occured", error.response.data.message, "error");
    }
  };

  return (
    <div className="note_form">
      <form onSubmit={handleSubmitaddNoteData}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"></input>
        <label htmlFor="note">Note</label>
        <input type="text" name="note" id="note"></input>
        <label htmlFor="public">Public?</label>
        <input type="checkbox" name="public" id="public"></input>
        <label htmlFor="categoryId">Category</label>
        <select name="categoryId" id="categoryId">
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="addImage"></label>
        <input type="file" name="image" id="addImage"></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
