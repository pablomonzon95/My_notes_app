import axios from "axios";



export const getCategoriesService = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/categories`
  );
  return response;
};

export const postCategoryService = async (payload) => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  await axios.post(`${process.env.REACT_APP_BACKEND}/categories`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: token,
    },
  })
};

export const deleteCategoryService = async (id) => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  await axios.delete(`${process.env.REACT_APP_BACKEND}/categories/${id}`, {
    headers: {
      authorization: token,
    },
  });
}
