import "./style.css";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import { getCategoriesService } from "../../services/categories";
import { postNoteService, editNoteService } from "../../services/notes";
import { useModal } from "../../context/ModalContext";

export const AddNoteForm = ({ id, setNotes, notes }) => {
  const [modal] = useModal();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const results = await getCategoriesService();
      setCategories(results.data.data);
    };

    loadCategories();
  }, []);
  /* console.log(categories); */
  const handleSubmitaddNoteData = async (e) => {
    e.preventDefault();

    const form = e.target;
    const payload = new FormData(form);

    try {
      await postNoteService(payload); //meter en una variable lo que venga del back (ver abajo)

      setNotes([
        { id: 948793793, title: "Cambia esto por algo de verdad" }, //cambiar este objeto por el real que viene del back
        ...notes,
      ]);

      form.reset();

      swal("Nota agregada correctamente");
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
        <label htmlFor="public">Public</label>
        <input type="checkbox" name="public" id="public"></input>
        <label htmlFor="categoryId">Category</label>
        <select className="select" name="categoryId" id="categoryId">
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <div className="image_button">
          <span className="addImage">
            <label htmlFor="addImage"></label>
            <input
              className="upload_file"
              type="file"
              name="image"
              id="addImage"
            ></input>
          </span>
        </div>
        <button type="submit">Add a note</button>
      </form>
    </div>
  );
};
