import React from 'react';

const user = (props) => {
    return (
        <div>
            <p onClick={props.myEvent}>User Name : {props.userName}</p>
            <p>Name : {props.children}</p>
        </div>
    )
}

export default user