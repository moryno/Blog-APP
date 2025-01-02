import axios from "axios";

const getPosts = async (params) => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params,
  });
  return data;
};
const createPost = (post, token) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/posts`, post, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

export const postService = {
  getPosts,
  createPost,
  authenticator,
};