import { combineReducers } from "redux";

import authorsReducer from "./authors";
import postsReducer from "./posts";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
  authors: authorsReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
