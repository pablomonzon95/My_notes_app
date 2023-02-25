import "./style.css";
import swal from "sweetalert";
import { postCategoryService } from "../../services/categories";
import { useModal } from "../../context/ModalContext";
export const AddCategoryForm = ({ categories, setCategories }) => {
  const [, setModal] = useModal();

  const handleSubmitaddCategoryData = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = new FormData(form);

    try {
      const newCategory = await postCategoryService(payload);
      setModal(null);

      setCategories([
        ...categories,
        {
          id: newCategory.id,
          name: newCategory.name,
        },
      ]);
      form.reset();
    } catch (error) {
      swal("An error has occured", error.response.data.message, "error");
    }
  };

  return (
    <div className="category_form">
      <form onSubmit={handleSubmitaddCategoryData}>
        <label htmlFor="email">Choose your personal category</label>
        <input type="text" id="AddCat" name="name" required></input>
        <button
          onClick={() => {
            swal("categoria añadida correctamente");
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
};
