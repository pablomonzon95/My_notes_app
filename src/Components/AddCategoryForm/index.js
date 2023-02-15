import "./style.css";
import swal from "sweetalert";
import axios from "axios";


export const AddCategoryForm = () => {
   

    const handleSubmitaddCategoryData = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const token = `Bearer ${localStorage.getItem("token")}`;
        const payload = new FormData(form);
    
        try {
          const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND}/categories`,
            payload,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                authorization: token,
              },
            }
          );
    
          console.log(data);
    
          form.reset();
        } catch (error) {
          swal("An error has occured", error.response.data.message, "error");
        }
    }


  return (
    <div className="category_form">
    <form onSubmit={handleSubmitaddCategoryData}>
      <label htmlFor="email">Choose your personal category</label>
      <input  type="text" id="AddCat" name="name" required></input>
      <button>ADD</button>
    </form>
    </div>
  );
}

