import React from 'react';

const Input = (props) => {
    return (
        <div class-name='form-group'>
            <label htmlFor={props.name} 
                className="form-label">{props.title}</label>
            <input 
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.changeHandler}
                placeholder={props.placeholder}
                />
        </div>
    )
}
export default Input