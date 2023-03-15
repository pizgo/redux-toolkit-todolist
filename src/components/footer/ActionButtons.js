import React from "react";
import {useDispatch, useSelector} from "react-redux";

const ActionButtons = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleMarkCompleted = () => {
        dispatch({type: 'todos/allCompleted'})
    }
    const handleClearCompleted = () => {
        dispatch({type: 'todos/clearCompleted'})
    }

    return (
        <div>
            <h5>Actions</h5>
            <button onClick={handleMarkCompleted}>Mark all completed</button>
            <button onClick={handleClearCompleted}>Clear completed</button>
        </div>
    )
}

export default ActionButtons