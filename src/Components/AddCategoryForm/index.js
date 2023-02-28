import "./style.css";
import PropTypes from 'prop-types'
import swal from "sweetalert";
import { postCategoryService } from "../../services/categories";
import { useModal } from "../../context/ModalContext";

 /* Este componente se usa dentro de un modal que se activa al presionar unos de los botones
ubicado en el User Panel para agregar nuevas categorias, consta de un formulario con su respectiva funcion manejadora. */

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
          id: newCategory.idCategory,
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

AddCategoryForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id:PropTypes.number
  })).isRequired,
  setCategories: PropTypes.func.isRequired
}
