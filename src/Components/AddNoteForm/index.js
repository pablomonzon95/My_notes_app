import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useNotes } from "../../hooks/useNotes";
export const AddNoteForm = () => {
  const { Notes, setNotes } = useNotes();
  const [addNoteData, setaddNoteData] = useState({
    title: "",
    note: "",
    public: false,
    categoryId: "",
  });
  const handleInputChangeAddNoteData = (e) => {
    let { name, value } = e.target;
    let newData = { ...addNoteData, [name]: value };
    setaddNoteData(newData);
  };
  const handleSubmitaddNoteData = async (e) => {
    e.preventDefault();
    const token = `Bearer ${localStorage.getItem("token")}`;
    console.log(token);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND}/notes`,
        addNoteData,
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      swal("An error has occured", error.response.data.message, "error");
    }
  };

  return (
    <form onSubmit={handleSubmitaddNoteData}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        required
        onChange={handleInputChangeAddNoteData}
      ></input>
      <label htmlFor="note">Note</label>
      <input
        type="text"
        name="note"
        id="note"
        required
        onChange={handleInputChangeAddNoteData}
      ></input>
      <label htmlFor="public">Public?</label>
      <input
        type="checkbox"
        name="public"
        id="public"
        onChange={handleInputChangeAddNoteData}
      ></input>
      {/* <label htmlFor="categoryId">Category</label> */}
      <input
        type="number"
        required
        name="categoryId"
        id="categoryId"
        onChange={handleInputChangeAddNoteData}
      ></input>
      <label htmlFor="addImage"></label>
      <input
        type="file"
        name="addImage"
        id="addImage"
        onChange={handleInputChangeAddNoteData}
      ></input>
      <button type="submit">Send</button>
    </form>
  );
};
