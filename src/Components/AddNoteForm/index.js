import "./style.css";
import PropTypes from "prop-types";
import swal from "sweetalert";

import { useEffect, useState } from "react";
import { getCategoriesService } from "../../services/categories";
import { postNoteService } from "../../services/notes";

//AddNoteForm es un componente que aparece en el userPanel para agregar nuevas notas, cada vez que se cambian las categorias, este se renderiza.
//consta de un formulario para añadir la nota nueva con su respectiva funcion manejadora.

export const AddNoteForm = ({ categories, setCategories, setNotes, notes }) => {
  const [file, setFile] = useState();
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
      const note = await postNoteService(payload);

      setNotes([
        ...notes,
        {
          id: note.id,
          title: note.title,

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
          <span className="add_image">
            <label className="label_addform" htmlFor="addImage">
              Add image
            </label>
            <input
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              className="upload_file"
              type="file"
              name="image"
              id="addImage"
              accept="image/*"
            ></input>

            {file ? (
              <img src={URL.createObjectURL(file)} style={{ width: "100px" }} />
            ) : null}
          </span>
        </div>
        <button type="submit">Add a note</button>
      </form>
    </div>
  );
};

AddNoteForm.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
  setCategories: PropTypes.func.isRequired,
  setNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      note: PropTypes.string,
      public: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
      image: PropTypes.string,
      userId: PropTypes.number,
      categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};
