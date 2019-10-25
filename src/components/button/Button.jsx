import React from 'react';
import If from '../structure/If'
import './Button.css'

export default props => (
    <If test={!props.hide}>
        <button className={`todo-button ${props.icon ? 'circle' : ''}`}
                onClick={props.click}
                disabled={props.disabled}
        >
            {
                props.icon 
                    ? <i className={`fa fa-${props.icon}`}></i>
                    : <span>{props.label}</span>
            }
            
        </button>
    </If>
)