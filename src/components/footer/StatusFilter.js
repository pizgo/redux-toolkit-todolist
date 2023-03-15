import React from "react";
import {statusFilters} from "../../store/features/filterSlice";
import {useDispatch, useSelector} from "react-redux";

const StatusFilter = () => {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const statusFilter = useSelector(state => state.filters.status)
    const status = Object.keys(statusFilters)

    const renderFilters = status.map((el) => {
        const value = statusFilters[el]
        const handleClick = () => {
            dispatch({type: 'footer/statusFilterChanged', payload: value})
            console.log(statusFilter)
        }

        return (
            <li key={value}>
                <button onClick={handleClick}>{el}</button>
            </li>
        )})

    return (
        <div>
            <h5>Filter by status</h5>
            <ul>{renderFilters}</ul>
        </div>
    )
}

export default StatusFilter