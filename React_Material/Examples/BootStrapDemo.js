import React from 'react';
import {Button, Progress} from 'reactstrap';

class BootStrapDemo extends React.Component{
    state = {
        progressVal : 10
      }
      btnClickHandler = (e) => {
        this.setState({progressVal : 40})
      }
    render(){
        return(
        <div>
            <Button color="warning" onClick={this.btnClickHandler}>Update Progress</Button>
            <Progress value={this.state.progressVal} color="info">Completed</Progress>
        </div>
        )
    }
}
export default BootStrapDemo