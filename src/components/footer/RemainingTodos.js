import React from "react";
import {useDispatch, useSelector} from "react-redux";

const RemainingTodos = () => {

    const todos = useSelector(state => state.todos.entities)
    const remainingTodoNumber = todos.filter((todo) => !todo.completed).length
    const suffix = remainingTodoNumber === 1 ? '' : 's'

    return (
        <div>
            <h5>Remaining tasks</h5>
            <strong>{remainingTodoNumber}</strong> task{suffix} left
        </div>
    )
}

export default RemainingTodos