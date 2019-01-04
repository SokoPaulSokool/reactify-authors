import { GET_ARTICLES } from "./types";
export const getArticles = () => dispatch => {
  fetch("http://127.0.0.1:8000/api/articles", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6ImhlbnJ5IiwiZXhwIjoxNTQ2NjkwMDY5fQ.r9a78ATrbmi6dXExYfPSWmyJjKkjkQphWwL7mxgMcO0"
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);

      dispatch({ type: GET_ARTICLES, payload: res.articles.results });
    });
};
