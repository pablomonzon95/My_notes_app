import axios from "axios";

export const postNoteService = async (payload) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    await axios.post(`${process.env.REACT_APP_BACKEND}/notes`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: token,
      },
    })
  };

  export const getNotesService = async() => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/notes`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response;
  }
  