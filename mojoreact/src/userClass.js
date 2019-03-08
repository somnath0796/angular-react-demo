import React from 'react';

/**
 * This is Class-based container.
 */

class userContainer extends React.Component {
    

    state = {
        Users : [
            {name : 'mThanos'},
            {name : 'Stark Bhau'}
        ]
    }
    userName = "Not Again, I am already displayed above by functional component.";

    clickHandler = (e) => {
        alert("Did you click me??");
        alert(e.currentTarget);
        alert(e.type);
        alert(e.nativeEvent);
    }

    render(){
        return(
            <div>
                
                <div>
                    <p>I am inherent State data: {this.state.Users[0].name}</p>
                    <p>I am inherent State data: {this.state.Users[1].name}</p>

                    <button onClick = {this.clickHandler}>
                        Click
                    </button>
                </div>
                <p>UserName: {this.userName}</p>
            </div>
            
        )
    }
}

export default userContainer