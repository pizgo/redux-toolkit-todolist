import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {colorFilterChanged} from "../../store/features/filterSlice";

export const availableColors = ['green', 'blue']

const ColorFilter = () => {

    const colors = useSelector(state => state.filters.colors)
    const dispatch = useDispatch()

    const renderedColors = availableColors.map((color) => {
            const checked = colors.includes(color)
            const handleChange = () => {
                const changeType = checked ? 'removed' : 'added';
                // dispatch({type: 'footer/colorFilterChanged', payload: {color: color, changeType: changeType}})
                //używamy action creator
                dispatch(colorFilterChanged(color, changeType))
            }
            return (
                <label key={color}>
                    <input
                        type="checkbox"
                        name={color}
                        checked={checked}
                        onChange={handleChange}/>
                    {color}
                </label>
            )
        })

    return (
        <div>
            <h5>Filter by color</h5>
            <form>{renderedColors}</form>
        </div>
    )
}

export default ColorFilter;