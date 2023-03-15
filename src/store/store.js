import { configureStore } from '@reduxjs/toolkit'
import {todosReducer} from "./features/todosSlice";
import {filtersReducer} from "./features/filterSlice";

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer
    }
})
export default store;

//configureStore robi wszystko: łączy reducery w jeden, tworzy stora, dodaje thunk
//middleware, reduxdev ext