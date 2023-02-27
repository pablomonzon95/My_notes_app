import "./style.css";
import PropTypes from 'prop-types'
import swal from "sweetalert";
import { useEffect } from "react";
import { getCategoriesService } from "../../services/categories";
import { postNoteService } from "../../services/notes";


export const AddNoteForm = ({ categories, setCategories, setNotes, notes }) => {


  useEffect(() => {
    const loadCategories = async () => {
      const results = await getCategoriesService();
      setCategories(results.data.data);
    };

    loadCategories();
    // eslint-disable-next-line
  }, []);

  const handleSubmitaddNoteData = async (e) => {
    e.preventDefault();

    const form = e.target;
    const payload = new FormData(form);

    try {
      const note = await postNoteService(payload); //meter en una variable lo que venga del back (ver abajo)

      setNotes([
        ...notes,
        {
          id: note.id,
          title: note.title,
          note: note.note, 
          image: note.image,
          public: note.public,
          userId: note.userId,
          categoryId: note.categoryId,
        },
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

AddNoteForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id:PropTypes.number
  })).isRequired,
  setCategories: PropTypes.func.isRequired,
  setNotes:PropTypes.func.isRequired,
  notes:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    note: PropTypes.string,
    public: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,]),
    image: PropTypes.string,
    userId:PropTypes.number,
    categoryId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,])

  }))
}