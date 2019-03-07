import React from 'react';
import axios from 'axios';

class Post extends React.Component{
    state = {
        Post : ''
    }
    constructor()
    {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        axios.get('http://jsonplaceholder.typicode.com/posts/2')
        .then(resp => {
        this.setState({Post:resp.data.title})
		window.localStorage.setItem('title',resp.data.title)
        })
    }

    render(){

        return(
            <div>
                <button type='button' onClick={this.handleClick}>Get Data</button>
                <p>{this.state.Post}</p>
            </div>
        )
         
    }
}

export default Post