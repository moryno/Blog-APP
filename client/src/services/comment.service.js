import axios from "axios";

const getComments = async (postId) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return data;
};

const createComment = (comment, token) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/comments`, comment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const deleteComment = (id, token) => {
  return axios.delete(`${import.meta.env.VITE_API_URL}/comments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const commentService = {
  getComments,
  createComment,
  deleteComment,
};
