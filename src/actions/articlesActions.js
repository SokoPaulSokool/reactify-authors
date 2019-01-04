import { GET_ARTICLES } from "./types";
export const getArticles = () => dispatch => {
  let token = window.localStorage.getItem('token')
  fetch("http://127.0.0.1:8000/api/articles", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization:
        `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);

      dispatch({ type: GET_ARTICLES, payload: res.articles.results });
    });
};
