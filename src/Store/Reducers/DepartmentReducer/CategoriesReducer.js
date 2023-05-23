
const initialState = {
    CategoriesData: []
}

const CategoriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "Categories": return {
            ...state,
            CategoriesData: payload
        }
        default: return state;
    }
}

export default CategoriesReducer;