import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from "react-redux"
import store from "./store/store";
import './api/server'
import {fetchTodos} from "./store/features/todosSlice";

//robimy dispatch thunka
store.dispatch(fetchTodos())

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
