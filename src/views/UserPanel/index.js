import { useEffect, useState } from "react";
import { AddNoteForm } from "../../Components/AddNoteForm";
import { AddCategoryForm } from "../../Components/AddCategoryForm";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { NotesSection } from "../../Components/NotesSection";
import { useSession } from "../../context/sessionToken";
import { useNotes } from "../../hooks/useNotes";
import { useModal } from "../../context/ModalContext";
import "./style.css";
import { deleteCategoryService } from "../../services/categories";
import swal from "sweetalert";

import { getCategoriesService } from "../../services/categories";

export const UserPanel = () => {
  const [categories, setCategories] = useState([]);
  const [, setModal] = useModal();
  const [loading, setLoading] = useState(true);
  const { notes, setNotes, getNotes } = useNotes();
  const [categoryData, setCategoryData] = useState("");
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    getNotes();

    (async () => {
      const results = await getCategoriesService();
      setCategories(results.data.data);
    })();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  const [, , logout] = useSession();

  const handleInputChangeDeleteCategory = (e) => {
    let categoryId = e.target.value;

    setCategoryData(categoryId);
  };

  const handleSubmitDeleteCategoryData = async (e) => {
    e.preventDefault();

    try {
      await deleteCategoryService(categoryData);

      swal("Categoria borrada correctamente");
    } catch (error) {
      swal("An error has occured", error.response.data.message, "error");
    }
  };
  // const handleSubmitFilterByCategory = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await getNotesByCategories(categoryData);
  //     const resultOk = result.data.data;
  //     setNotes(resultOk);
  //   } catch (error) {}
  // };^

  const renderedNotes = filter
    ? notes.filter((note) => Number(note.categoryId) === Number(filter))
    : notes;

  return (
    <div className="user_panel">
      <Header viewtitle="This is you personal panel">
        <button
          onClick={() => {
            setModal(<AddCategoryForm />);
          }}
        >
          Add category
        </button>

        <button onClick={() => logout()}>Log out</button>
      </Header>

      {loading ? (
        <div className="loading">
          <img src="./img/loading.gif" alt="loading"></img>
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <AddNoteForm
            notes={notes}
            setNotes={setNotes}
            categories={categories}
            setCategories={setCategories}
          ></AddNoteForm>

          {localStorage.getItem("id") === "1" && (
            <form
              onSubmit={handleSubmitDeleteCategoryData}
              className="delete_category"
            >
              <label htmlFor="category_delete">
                {" "}
                Choose a category to delete
              </label>
              <select
                onChange={handleInputChangeDeleteCategory}
                className="select_delete"
                name="category_delete"
                id="category_delete"
              >
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>

              <button>Delete</button>
            </form>
          )}
          <form className="filter_form">
            <label htmlFor="category_filter">
              Choose your notes by category
            </label>
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="select_filter"
              name="category_filter"
              id="category_filter"
              value={filter}
            >
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </form>

          {filter ? (
            <p>
              Estás viendo las notas filtradas{" "}
              <button onClick={() => setFilter(null)}>Quitar filtro</button>
            </p>
          ) : null}

          {renderedNotes.length > 0 ? (
            <NotesSection
              title="Your personal notes"
              notes={renderedNotes}
            ></NotesSection>
          ) : (
            <p>No hay notas, cambia el filtro</p>
          )}
        </>
      )}
      <Footer></Footer>
    </div>
  );
};
