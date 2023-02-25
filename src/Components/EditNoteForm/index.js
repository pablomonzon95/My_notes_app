import "./style.css";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import { getCategoriesService } from "../../services/categories";
import { editNoteService } from "../../services/notes";
import { useModal } from "../../context/ModalContext";

export const EditNoteForm = ({ note }) => {
  const [, setModal] = useModal();
  const [categories, setCategories] = useState([]);
  const [deleteImage, setDeleteImage] = useState(false);

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
      await editNoteService(note.id, payload);

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
          defaultChecked={note.public === "on"}
        ></input>
        <label htmlFor="categoryId">Category</label>
        <select className="select" name="categoryId" id="categoryId">
          {categories.map((category) => {
            return (
              <option
                key={category.id}
                value={category.id}
                selected={category.id === note.categoryId}
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
                  <>
                    <p>Imagen actual</p>
                    <img
                      className="img_edit_form"
                      src={`${process.env.REACT_APP_BACKEND}/uploads/${note.image}`}
                      alt={note.title}
                    />
                    <label htmlFor="deleteImage">Quitar imágen?</label>
                    <input
                      name="deleteImage"
                      type="checkbox"
                      onInput={(e) => {
                        setDeleteImage(e.target.checked);
                      }}
                      defaultChecked={note.image === null}
                    />
                  </>
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
