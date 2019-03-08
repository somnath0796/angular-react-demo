import React from 'react';

class avenger extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const avengeDes = {
            width : '150px,',
            border : '2px solid red',
            borderRadius : '4px',
            anchormarginLeft : '15px',
            anchormarginBottom : '5px',
            padding  : '12px' 
        }

        return (
            <div style={avengeDes}>
                <h3>{this.props.name}</h3>
                <p>{this.props.element}</p>
            </div>
        )
    }
} 

export default avenger