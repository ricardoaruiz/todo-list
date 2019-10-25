import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { list, changeStatus, remove } from '../../../actions/todoActions';

import Button from '../../../components/button/Button'

import './TodoList.css';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.tableRows = this.tableRows.bind(this);
    }

    tableRows() {
        if (this.props.todos && this.props.todos.length) {
            return (
                this.props.todos.map(todo => (
                    <tr key={todo.id}>
                    <td>
                        <span className={todo.done ? 'todo-done' : ''}>
                            {todo.description}
                        </span>
                    </td>
                    <td>
                        <div className="todo-list_table_action-cel">
                            <Button icon={todo.done ? 'undo' : 'check'} 
                                    click={() => this.props.changeStatus(todo)} />

                            <Button icon="trash" 
                                    click={() => this.props.remove(todo)} 
                                    hide={!todo.done} />
                        </div>
                    </td>
                    </tr>
                ))
            )
        }

        return null;
    }

    render() {
        return(
            <div className="todo-list">
                <table className="todo-list_table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th className="todo-list_table_action-col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
        this.props.list();
    }
}

const mapStateToPros = state => ({
    todos: state.todo.todos
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ list, changeStatus, remove }, dispatch);
}

export default connect(mapStateToPros, mapDispatchToProps)(TodoList);