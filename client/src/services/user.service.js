import axios from "axios";

const getUserSavedPost = async (token) => {
  return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const saveUserPost = (postId, token) => {
  return axios.patch(`${import.meta.env.VITE_API_URL}/users/save`, postId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const userService = { getUserSavedPost, saveUserPost };
