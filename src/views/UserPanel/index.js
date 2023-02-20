import { useEffect, useState } from "react";
import { AddNoteForm } from "../../Components/AddNoteForm";
import { AddCategoryForm } from "../../Components/AddCategoryForm";
import { Header } from "../../Components/Header";
import {Footer} from "../../Components/Footer"
import { NotesSection } from "../../Components/NotesSection";
import { useSession } from "../../context/sessionToken";
import { useNotes } from "../../hooks/useNotes";
import { useModal } from "../../context/ModalContext";
import "./style.css";
import { deleteCategoryService } from "../../services/categories";
import swal from "sweetalert";

export const UserPanel = () => {
  const [categories, setCategories] = useState([]);
  const [, setModal] = useModal();
  const [loading, setLoading] = useState(true);
  const { notes, getNotes } = useNotes();
  const [categoryData, setCategoryData] = useState("")

  useEffect(() => {
    getNotes();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line
  }, [notes]);

  const [, , logout] = useSession();

  const handleInputChangeDeleteCategory= (e) => {
    let categoryId= e.target.value;
    console.log(categoryId)
    setCategoryData(categoryId);
  };

  const handleSubmitDeleteCategoryData = async (e) => {
    e.preventDefault();

    try {
      await deleteCategoryService(categoryData)

      swal("Categoria borrada correctamente");
    } catch (error) {
      swal("An error has occured", error.response.data.message, "error");
    }
    
  };

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
        <AddNoteForm categories = {categories} setCategories={setCategories}></AddNoteForm>
        {localStorage.getItem("id") === "1" && <form onSubmit= {handleSubmitDeleteCategoryData}className="delete_category">
        <label htmlFor="category_delete"> Choose a category to delete</label>
        <select onChange={handleInputChangeDeleteCategory} className="select_delete" name="category_delete" id="category_delete">
          
          {categories.map((category) => {
            
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
     
        </select>
         
        <button >Delete</button>
        
      </form> }
        <NotesSection title="Your personal notes" notes={notes}></NotesSection>
        </>

      )}
      <Footer></Footer>
    </div>
  );
};
