import React from 'react'
import store from "./store/store";
import TodoInput from "./components/todoInput/TodoInput";
import TodoList from "./components/todoList/TodoList";
import Footer from "./components/footer/Footer";

function App() {


  return (
    <div className="App">
      <nav>
        <section>
          <h1>Todo List</h1>
        </section>
      </nav>
      <section style={{width: "60%"}}>
          <TodoInput/>
          <TodoList/>
          <Footer/>
      </section>
    </div>
  )
}

export default App
