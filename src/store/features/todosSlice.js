import {client} from "../../api/client";
import {createSelector} from '@reduxjs/toolkit';
import {statusFilters} from "./filterSlice";
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: 'idle',
    entities: []
}

//automatycznie się generaują action creators
//automatycznie zwraca obecny stan in the default case
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdd(state, action) {
            state.entities.push(action.payload) // można mutować stan!
        },
        todoToggled(state, action) {
            const todo = state.entities.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        },
        todosLoading(state, action) {
            return {
                ...state,
                status: 'loading'
            }
        }
    }
})

//wygenerowane action creators są dostępne jako slice.actions.todoAdded.
// desktrukturyzujemy je
export const {todoAdded, todoToggled, todosLoading } = todosSlice.actions
export default todosSlice.reducer

// export const todosReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'todos/colorSelected': {
//             let {todoId, color} = action.payload;
//             return {
//                 ...state,
//                 entities: state.entities.map((todo) => {
//                     if (todo.id === todoId) {
//                         return {
//                             ...todo,
//                             color
//                         }
//                     }
//                     return todo;
//                 })
//             }
//         }
//         case 'todos/todoDeleted': {
//             return {
//                 ...state,
//                 entities: state.entities.filter((todo) => todo.id !== action.payload),
//             }
//         }
//         case 'todos/allCompleted': {
//             return {
//                 ...state,
//                 entities: state.entities.map((todo) => {
//                     return { ...todo, completed: true }
//                 }),
//             }
//         }
//         case 'todos/completedCleared': {
//             return {
//                 ...state,
//                 entities: state.entities.filter((todo) => !todo.completed),
//             }
//         }
//         case 'todos/todosLoading': {
//             return {
//                 ...state,
//                 status: 'loading'
//             }
//         }
//         case 'todos/todosLoaded': {
//             return {
//                 ...state,
//                 status: 'idle',
//                 entities: action.payload
//             }
//         }
//         default: return state;
//     }
// }
//
// //action creators
// export const todoAdded = (todo) => ({ type: 'todos/todoAdd', payload: todo })
// export const todoToggled = (todoId) => ({
//     type: 'todos/todoToggled',
//     payload: todoId
// })
// export const todoColorSelected = (todoId, color) => ({
//     type: 'todos/colorSelected',
//     payload: { todoId, color },
// })
// export const todoDeleted = (todoId) => ({
//     type: 'todos/todoDeleted',
//     payload: todoId,
// })
// export const allTodosCompleted = () => ({ type: 'todos/allCompleted' })
//
// export const completedTodosCleared = () => ({ type: 'todos/completedCleared' })
//
// export const todosLoading = () => ({ type: 'todos/todosLoading' })
// export const todosLoaded = todos => ({
//     type: 'todos/todosLoaded',
//     payload: todos
// })
//
//
// //API CALLS
// export const fetchTodos = () => async (dispatch) => {
//     dispatch(todosLoading())
//     const response = await client.get('/fakeApi/todos')
//     dispatch(todosLoaded(response.todos))
// }
//
// export function saveNewTodo(text) {
//     return async function saveNewTodoThunk(dispatch, getState) {
//         const initialTodo = { text }
//         const response = await client.post('/fakeApi/todos', { todo: initialTodo })
//         dispatch(todoAdded(response.todo))
//     }
// }
//
// export const selectTodos = (state) => state.todos.entities
//
// export const selectTodoById = (state, todoId) => {
//     return selectTodos(state).find((todo) => todo.id === todoId)
// }
//
// //MEMOIZED SELECTORS
// export const selectTodoIds = createSelector(
//     //najpierw przekazujemy input selector functions:
//     selectTodos,
//     //potem output selector, którzy przyjme wszystkie input results as args i zwraca final result value - gdzie on je przyjmuje?
//     (todos) => todos.map(todo => todo.id)
// )
//
// export const selectFilteredTodos = createSelector(
//     // First input selector: all todos
//     selectTodos,
//     // Second input selector: all filter values
//     state => state.filters,
//     // Output selector: receives both values
//     (todos, filters) => {
//         const { status, colors } = filters
//         const showAllCompletions = status === statusFilters.all
//         if (showAllCompletions && colors.length === 0) {
//             return todos
//         }
//
//         const completedStatus = status === statusFilters.completed
//         // Return either active or completed todos based on filter
//         return todos.filter((todo) => {
//             const statusMatches =
//                 showAllCompletions || todo.completed === completedStatus
//             const colorMatches = colors.length === 0 || colors.includes(todo.color)
//             return statusMatches && colorMatches
//         })
//     }
// )
//
// export const selectFilteredTodoIds = createSelector(
//     // Pass our other memoized selector as an input
//     selectFilteredTodos,
//     // And derive data in the output selector
//     (filteredTodos) => filteredTodos.map((todo) => todo.id)
// )
