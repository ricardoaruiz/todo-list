import React from 'react';

import './InputText.css';

export default props => (
    <input type="text" 
        className="todo-input-text" 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.input}
        onKeyUp={props.keyup}
        readOnly={props.readOnly}
        disabled={props.disabled}
    />
)