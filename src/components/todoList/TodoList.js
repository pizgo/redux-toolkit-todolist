import React from "react";
import {shallowEqual, useSelector} from "react-redux";
import TodoListItem from "./TodoListItem";
import {selectFilteredTodoIds, selectTodoIds} from "../../store/features/todosSlice";

const TodoList = () => {

    // const todos = useSelector(state => state.todos)
    // const statusFilter = useSelector(state => state.filters.status)
    // const colors = useSelector(state => state.filters.colors)
    //
    // let todosToShow = todos
    //
    // if (statusFilter !== 'all'){
    //     todosToShow = todosToShow.filter((todo) => {
    //         return (statusFilter === 'completed') ? todo.completed : !todo.completed
    //     })
    // }
    //
    // if (colors.length > 0) {
    //     todosToShow = todosToShow.filter((todo) => colors.includes(todo.color))
    // }
    //
    // const renderAllListItem = todosToShow.map((todo) => {
    //     return <TodoListItem key={todo.id} todo={todo} />
    // })
    //
    // return <ul>{renderAllListItem}</ul>

    //wzór wyżej generuje problem: todolist odczytuje cały state.todos i przekazuje cały obiekt todo do propsów
    //zmiana jednego todo obiektu tworzy kopię  zarówno obiektu jak i całej tablicy - a każda kopia to nowa referencja w pamięci
    //kiedy useSelector widzi nową referencję, to zmusza cały komponent do re-renderu!
    //za każdym razem kiedy jeden task się zmieni (np prze toggle), cały todolist się przerenderuje - więc także każdy todolistitem, nawet jeśli
    //inne się nie zmieniły
    // rozwiązanie: niech todolist czyta z tablicy tasków tylko id każdego taska, i to id niech przekazuje w propsach. potem każdy todolistitem użyje
    //id żeby znaleźć odpowiedni do wyświetlenia obiekt

    //tworzymy nową tablicę tylko z numerami id => robimy też odpowiednią zmianę w TodoListItem

            //const selectToDoIds = state => state.todos.map(todo=> todo.id)

    // gdybysmy po prostu zrobili const todoIds = useSelector(selectToDoIds)
    //z tym rozwiązaniem też problem - nadal zwracamy nową tablicę (z id,), która będzie wymuszała rerender
    //np przy toggle statusu, zawartość tablicy z id powinna się nie zmienić, bo nie dzialamy na id, ale i tak tworzy się nowa referencja, więc
    //cały todolist sięp rzerenderuje
    //rozwiązanie: zmienić jak useSelector porównuje wartości, żeby sprawdzić czy się zmieniły
    //useSelector może przyjąć comparison function jako swój drugi argument. jest wołana ze starą i nową wartością i zwraca true, jeśli są takie same. wtedy
    //useSelector nie wymusi rerenderu
    //ta funkcja to shallowEqual comparison function
    //teraz jeśli zrobimy toggle, lista id będzie uznana za taką samą więc todolist się nie przerenderuje. przerenderuje się tylko jeden todolistItem, który się zmieni

            //const todoIds = useSelector(selectToDoIds, shallowEqual)

    //rozwiązanie problemu z użyciem memoized selectors
    //działa inaczej niż shallowEqual comparison . Za każdym razem gdy state.todos się zmieni, tworzymy nowy todo Ids array jako resultat
    //to uwzględnia każdą immutable zmianę dla pojedynczego itemu np toglowanie
    //const todoIds = useSelector(selectTodoIds)

    //po stworzeniu multiple memo do filtru
    const todoIds = useSelector(selectFilteredTodoIds)

    const renderedListItems = todoIds.map(todoId => {
        return <TodoListItem key={todoId} id={todoId}/>
    })
    return <ul>{renderedListItems}</ul>



}

export default TodoList