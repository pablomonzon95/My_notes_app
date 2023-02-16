import axios from "axios";

export const getCategoriesService = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/categories`
  );
  return response;
};
