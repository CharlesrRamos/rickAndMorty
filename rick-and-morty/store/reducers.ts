import { combineReducers } from "@reduxjs/toolkit";
import { favoriteReducer } from "./slices";

export default combineReducers({
  favorite: favoriteReducer,
});
