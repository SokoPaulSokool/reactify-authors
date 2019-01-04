import { toast } from "react-toastify";
import { SIGNUP, LOGIN } from "./types";

export const createUser = postData => dispatch => {
  fetch("http://127.0.0.1:8000/api/users/", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ user: postData })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.errors) {
        // let errors = JSON.parse(res);
        for (let key in res.errors) {
          if (res.errors.hasOwnProperty(key)) {
            toast.error(key.toUpperCase() + ": " + res.errors[key][0], {
              position: toast.POSITION.TOP_LEFT
            });
          }
        }
      } else {
        toast.success(res.user.message, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          dispatch({ type: SIGNUP });
        }, 5000);
      }
    });
};

export const loginUser = postData => dispatch => {
  fetch("http://127.0.0.1:8000/api/users/login/", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ user: postData })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.errors) {
        // let errors = JSON.parse(res);
        for (let key in res.errors) {
          if (res.errors.hasOwnProperty(key)) {
            toast.error(key.toUpperCase() + ": " + res.errors[key][0], {
              position: toast.POSITION.TOP_LEFT
            });
          }
        }
      } else {
        toast.success("Welcome " + res.user.username, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          dispatch({ type: LOGIN, payload: res.user });
        }, 5000);
      }
    });
};
