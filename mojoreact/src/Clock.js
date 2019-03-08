import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        console.log('Component constructed');
    }

    componentDidMount() {
        // it runs after the component output has been rendered to the DOM
        console.log('Component did mount')
        this.clockID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUpdate(){
        console.log('Component did Update');
    }

    componentWillUnmount() {
        console.log('Component will Unmount')
        // it runs right before React unmounts and destroys our component
        clearInterval(this.clockID);
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        console.log('Component rendered')
        return (
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        );
        
    }
}

export default Clock;