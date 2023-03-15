export const statusFilters = {
    all: 'all',
    active: 'active',
    completed: 'completed'
}

const initialState = {
        status: statusFilters.all,
        colors: []
}

export const filtersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'footer/statusFilterChanged': {
            return {
                ...state,
                status: action.payload
            }
        }
        case 'footer/colorFilterChanged': {
            let { color, changeType } = action.payload
            const { colors } = state

            switch (changeType) {
                case 'added': {
                    if (colors.includes(color)) {
                        return state
                    }
                    return {
                        ...state,
                        colors: state.colors.concat(color),
                    }
                }
                case 'removed': {
                    return {
                        ...state,
                        colors: state.colors.filter(
                            (existingColor) => existingColor !== color
                        ),
                    }
                }
                default:
                    return state
            }
        }
        default: return state;
    }
};

//action creator dla colorFilterChanged

export const colorFilterChanged = (color, changeType) => {
    return {
        type: 'footer/colorFilterChanged',
        payload: {color, changeType}
    }
}