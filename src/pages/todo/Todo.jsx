import React from 'react';

import './Todo.css';

import TodoForm from './todo-form/TodoForm'
import TodoList from './todo-list/TodoList'

export default props => (
    <section className="todo-container">
        <TodoForm />
        <TodoList />
    </section>
)