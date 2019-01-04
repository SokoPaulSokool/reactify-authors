import { combineReducers } from "redux";
import signUpReducer from "./authReducer";
import articlesReducer from "./articlesReducer";

const rootReducer = combineReducers({
  user: signUpReducer,
  articles: articlesReducer
});
export default rootReducer;
