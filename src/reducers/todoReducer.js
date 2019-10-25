import { TODO_ACTIONS } from '../actions/todoActions';

const INITIAL_STATE = {
    description: '',
    todos: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TODO_ACTIONS.CHANGE_TODO_DESCRIPTION:
            return { ...state, description: action.payload }
        case TODO_ACTIONS.LIST_TODOS:
            return { ...state, todos: action.payload }
        case TODO_ACTIONS.ADD_TODOS:
            return { ...state, description: '' }
        case TODO_ACTIONS.CLEAR_TODOS:
            return INITIAL_STATE
        default:
            return state;
    }
}