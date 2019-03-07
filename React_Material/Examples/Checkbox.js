import React from 'react';

const Checkbox = (props) => {
    return(
        <div className='form-group'>
            <label htmlFor={props.name} className='form-label'>{props.title}</label>
            <div className='checkbox-group'>
                {props.options.map(option => {
                    return(
                        <label key={option}>
                            <input className='form-checkbox'
                            id = {props.name}
                            name = {props.name}
                            onChange = {props.changeHandler}
                            value = {option}
                            checked = {props.selectedOptions.indexOf(option) > -1 }
                            type='checkbox'/> 
                            {option}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default Checkbox