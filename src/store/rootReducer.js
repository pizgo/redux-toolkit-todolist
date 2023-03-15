import {todosReducer} from "./features/todosSlice";
import {filtersReducer} from "./features/filterSlice";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})