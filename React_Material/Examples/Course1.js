import React from 'react';
import PropTypes from 'prop-types';

const course = (props) => {
    return (
        <div>
            <h2>Course Name : {props.name}</h2>
            <p>Duration in weeks : {props.duration}</p>
            <p>Course Description {props.description}</p>
            <hr/>
        </div>
    )
}
const validDesc = function(props, propName, componentName){
    if(!((props[propName]).length>5))
        return new Error('Invalid value! Expected the length to be greater than 5')
}

course.propTypes = {
    name : PropTypes.string,
    duration : PropTypes.number,
    description : validDesc
}

export default course