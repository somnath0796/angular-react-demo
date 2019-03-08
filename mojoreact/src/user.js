import React from 'react';
import PropTypes from 'prop-types';


/**
 * This is a functional component
 */
const user = (props) => {
    //const userName = 'mThanos';
    //const alignValue = 'right';

    /**
     * userName is a prop. any data passed for content projection can be retrieved by children.
     */
    return <div>
        <p> {props.userName}</p>
        <p> {props.children}</p>
    </div>
}

/**
 * Prop validation
 */

 user.propTypes = {
     userName : PropTypes.string
 }
export default user