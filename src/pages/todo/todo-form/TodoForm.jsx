import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { changeDescription, add, list, clear } from '../../../actions/todoActions';

import InputText from '../../../components/input-text/InputText';
import Button from '../../../components/button/Button';

import './TodoForm.css';

const TodoForm = props => {

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            if (event.shiftKey) {
                props.list()
            } else if (props.description) {
                props.add(props.description)
            } 
        } else if(event.key === 'Escape') {
            props.clear()
        }
    }

    return (
        <div className="todo-form">
            
            <InputText placeholder="Type a task description"
                value={props.description}
                input={(event) => props.changeDescription(event.target.value)}
                keyup={handleKey}/>

            <div className="todo-form_action">
                <Button icon="plus" click={() => props.add(props.description)} disabled={!props.description}/>
                <Button icon="search" click={props.list}/>
                <Button icon="refresh" click={props.clear}/>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, add, list, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);