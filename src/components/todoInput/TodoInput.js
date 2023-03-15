import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {saveNewTodo, selectTodos} from "../../store/features/todosSlice";

const TodoInput = () => {
    const [text, setText] = useState('')
    //thunk and promises
    const [status, setStatus] = useState('idle')

    const dispatch = useDispatch()
    const handleChange = (e) => setText(e.target.value)
    // const handleKeyDown = (e) => {
    //     const trimmedText = e.target.value.trim()
    //     if (e.key === 'Enter' && trimmedText) {
    //         //wywołujemy outer funkcję z przekazanym textem - api call
    //         dispatch(saveNewTodo(trimmedText))
    //         setText('')
    //     }
    // }
    //handleKeyDown z wykorzystaniem thunka i promise
    const handleKeyDown = async e => {
        //jeśli user wciska enter
        const trimmedText = text.trim()
        if (e.key === 'Enter' && trimmedText) {
            //create and dispatch the thunk function itself
            setStatus('loading')
            //wait for the promise returned by saveNewTodo
            await dispatch(saveNewTodo(trimmedText))
            //clear out the text input
            setText('')
            setStatus('idle')
        }
    }
    //reszta kodu do obsługi sytuacji z ładowaniem w inpucie
    let isLoading = status === 'loading'
    let placeholder = isLoading ? '' : 'What do you want to do?'
    let loader = isLoading  ? 'loading' : null

    return (
        <div>
            <input
                type='text'
                value={text}
                autoFocus={true}
                placeholder={placeholder}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
            />
            {loader}
        </div>
    )
}

export default TodoInput