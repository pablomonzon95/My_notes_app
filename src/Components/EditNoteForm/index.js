import "./style.css";
import PropTypes from "prop-types";
import swal from "sweetalert";

import { useEffect, useState } from "react";
import { getCategoriesService } from "../../services/categories";
import { editNoteService } from "../../services/notes";
import { useModal } from "../../context/ModalContext";

//EditNoteForm es un componente que aparece en un modal activado con un boton del NoteDetail. Sirve para editar notas, cada vez que se cambian las categorias, este se renderiza.
//consta de un formulario para editar la nota correspondiente con su respectiva funcion manejadora.

export const EditNoteForm = ({ note, notes, setNotes }) => {

  const [, setModal] = useModal();
  const [categories, setCategories] = useState([]);
  const [deleteImage] = useState(false);


  useEffect(() => {

    const loadCategories = async () => {
      const results = await getCategoriesService();
      setCategories(results.data.data);
    };

    loadCategories();
  }, []);

  const handleSubmitaddNoteData = async (e) => {

    e.preventDefault();

    const form = e.target;

    const payload = new FormData(form);

    try {

      const noteEdit = await editNoteService(note.id, payload);

      const notesupdated = notes.filter((note) => note.id !== noteEdit.id);

      setNotes([
        {
          id: noteEdit.id,
          title: noteEdit.title,
          /* note: note.note,
          image: note.image, */
          public: noteEdit.public,
          userId: noteEdit.userId,
          categoryId: noteEdit.categoryId,
        },

        ...notesupdated,
      ]);

      form.reset();

      setModal(null);

      swal("Note edited succesfully");

    } catch (error) {

      swal("An error has occured", error.response.data.message, "error");

    }
  };

  return (
    <div className="note_edit_form">
      <form onSubmit={handleSubmitaddNoteData}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={note.title}
        ></input>
        <label htmlFor="note">Note</label>
        <input
          type="text"
          name="note"
          id="note"
          defaultValue={note.note}
        ></input>
        <label htmlFor="public">Public</label>
        <input
          type="checkbox"
          name="public"
          id="public"
          defaultChecked={note.public === "on" || note.public === 1}
        ></input>
        <label htmlFor="categoryId">Category</label>
        <select className="select" name="categoryId" id="categoryId">
          {categories.map((category) => {
            return (
              <option
                key={category.id}
                value={category.id}
                defaultValue={category.id === note.categoryId}
              >
                {category.name}
              </option>
            );
          })}
        </select>
        {!deleteImage ? (
          <>
            <div className="image_button">
              {note.image ? (
                note.image === "No images" || note.image === null ? null : (
                  <div className="image_edit">
                    <p>Current image</p>
                    <img
                      className="img_edit_form"
                      src={`${process.env.REACT_APP_BACKEND}/uploads/${note.image}`}
                      alt={note.title}
                    />
                    <label htmlFor="deleteImage">Quitar imágen?</label>
                    <input
                      name="deleteImage"
                      type="checkbox"
                    />
                  </div>
                )
              ) : null}
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
          </>
        ) : null}

        <button type="submit">Edit note</button>
      </form>
    </div>
  );
};
EditNoteForm.propTypes = {
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
  ).isRequired,
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.string,
    public: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    image: PropTypes.string,
    userId: PropTypes.number,
    categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
