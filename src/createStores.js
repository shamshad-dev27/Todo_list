import { combineReducers, createStore } from "redux";
import todoReducer from "./TodoReducer/todoReducer";
const reducer=combineReducers({todo:todoReducer});
const store=createStore(reducer);
export default store;