import axios from 'axios';

const TODO_BASE_URL = 'http://localhost:3001/todo';

export const TODO_ACTIONS = {
    CHANGE_TODO_DESCRIPTION: 'CHANGE_TODO_DESCRIPTION',
    ADD_TODOS: 'ADD_TODOS',
    LIST_TODOS: 'LIST_TODOS',
    CLEAR_TODOS: 'CLEAR_TODOS'
}

export const changeDescription = (newDescription) => ({
    type: TODO_ACTIONS.CHANGE_TODO_DESCRIPTION,
    payload: newDescription
})

export const list = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const filter = description ? `?description_like=${description}` : ''

        axios.get(`${TODO_BASE_URL}${filter}`)
            .then(result => dispatch({ type: TODO_ACTIONS.LIST_TODOS, payload: result.data }))
    }
}

export const add = description => {
    return dispatch => {
        axios.post(`${TODO_BASE_URL}`, { description, done: false })
            .then(() => dispatch({ type: TODO_ACTIONS.ADD_TODOS }))
            .then(() => dispatch(list()))
    }
}

export const clear = () => ({
    type: TODO_ACTIONS.CLEAR_TODOS
})

export const remove = task => {
    return dispatch => {
        axios.delete(`${TODO_BASE_URL}/${task.id}`)
            .then(() => dispatch(list()))
    }
}

export const changeStatus = task => {
    return dispatch => {
        axios.put(`${TODO_BASE_URL}/${task.id}`, { ...task, done: !task.done })
            .then(() => dispatch(list()))
    }
}

