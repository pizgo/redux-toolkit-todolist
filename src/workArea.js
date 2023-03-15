//wywoływanie w app

import store from "./store/store";

console.log(store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('state after dispatch: ', store.getState())
})

store.dispatch({ type: 'todos/todoAdd', payload: 'Learn about actions' })

//middleware
