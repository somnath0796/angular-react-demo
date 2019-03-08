import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    state = {
        Post : ''
    }

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        axios.get('http://jsonplaceholder.typicode.com/posts/2')
        .then(resp => {
            this.setState({Post : resp.data.title})
            console.log(resp.data.title)
        })
    }
    render(){
        return(
            <div className="Post">
                <p>{this.state.Post}</p>
                <button type='button' onClick={this.handleClick}>Get Data</button>
                
            </div>
        )
    }
}

export default Post