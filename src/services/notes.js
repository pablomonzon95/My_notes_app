import axios from "axios";

export const postNoteService = async (payload) => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  await axios.post(`${process.env.REACT_APP_BACKEND}/notes`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: token,
    },
  });
};

export const getNotesService = async () => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  const response = await axios.get(`${process.env.REACT_APP_BACKEND}/notes`, {
    headers: {
      authorization: token,
    },
  });
  return response;
};

export const getNoteService = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/public/${id}`
  );
  return response;
};

export const getPublicNotesService = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BACKEND}/public`);
  return response;
};

export const deleteNoteService = async (id) => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  await axios.delete(`${process.env.REACT_APP_BACKEND}/note/${id}`, {
    headers: {
      authorization: token,
    },
  });
};

export const editNoteService = async (id, payload) => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  await axios.put(`${process.env.REACT_APP_BACKEND}/note/${id}`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: token,
    },
  });
};
