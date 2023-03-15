import {createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {myMiddleware} from "../exampleAddons/middleware";

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)
const store = createStore(rootReducer, composedEnhancer )
export default store;