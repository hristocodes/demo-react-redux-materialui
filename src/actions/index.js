import jsonPlaceholderApi from "../apis/jsonPlaceholder";

export const fetchAuthors = () => async (dispatch) => {
  const response = await jsonPlaceholderApi.get("/users");

  dispatch({
    type: "FETCH_AUTHORS",
    payload: response.data,
  });
};

export const fetchPosts = (userId) => async (dispatch) => {
  const response = await jsonPlaceholderApi.get(`/users/${userId}/posts`);

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

export const fetchComments = (postId) => async (dispatch) => {
  const response = await jsonPlaceholderApi.get(`/posts/${postId}/comments`);

  dispatch({
    type: "FETCH_COMMENTS",
    payload: response.data,
  });
};
