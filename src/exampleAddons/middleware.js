export const myMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  // console.log('result:', result)
  console.log('next state', storeAPI.getState())
  return result
  // if (action.type === 'todos/todoAdd') {
  //   setTimeout(() => {
  //     console.log('Added a new todo: ', action.payload)
  //   }, 4000)
  // }
  // return next(action)
}