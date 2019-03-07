import React from 'react';
import PropTypes from 'prop-types';

const course = (props) => {
    return (
        <div>
            <h2>Course Name : {props.name}</h2>
            <p>Duration in weeks : {props.duration}</p>
            <p>{props.children}</p>
            <hr/>
        </div>
    )
}

course.propTypes = {
    name : PropTypes.string,
    duration : PropTypes.number
}

export default course