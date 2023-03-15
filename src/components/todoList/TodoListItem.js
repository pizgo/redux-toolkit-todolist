import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {availableColors} from "../footer/ColorFilter";
import {selectTodoById, todoColorSelected} from "../../store/features/todosSlice";

const TodoListItem = ({id}) => {

    //szukamy w tablicy ze wszystkimi taskami taska z konkretnym id, potem przekazujemy to do selectora

    const dispatch = useDispatch();
    const todo = useSelector((state) => selectTodoById(state, id))


    const colorOptions = availableColors.map((color) => (
        <option value={color} key={color}>{color}</option>
    ))
    const handleCompletedChanged = () => {
        dispatch({type: 'todos/todoToggled', payload: todo.id})
    }
    const handleColorChanged = (e) => {
        const color = e.target.value
        dispatch(todoColorSelected(todo.id, color))
    }
    const onDelete = () => {
        dispatch({type: 'todos/todoDeleted', payload: todo.id})
    }

        return (
            <li>
                <div>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleCompletedChanged}
                    />
                    <div>{todo.text}</div>
                    <div>
                        <select
                            value={todo.color}
                            onChange={handleColorChanged}>
                            {colorOptions}
                        </select>
                        <button onClick={onDelete}>X</button>
                    </div>
                </div>
            </li>
        )
}

export default TodoListItem