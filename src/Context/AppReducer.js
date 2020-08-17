const ADD_LIST = 'ADD_LIST';
const DELETE_LIST = 'DELETE_LIST';

export default (state, action) => {
    switch(action.type) {
        case ADD_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            }
        case DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload)
            }
        default: return state;
    }
}