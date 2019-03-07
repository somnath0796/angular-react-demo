import React from 'react';

class uncontrolledForm extends React.Component{
    submitHandler = (e) => {
        e.preventDefault();
        alert("First Name " + this.refs.txtFname.value + " submitted");
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <label>
                    First Name : 
                    <input type="text" name="txtFname" ref="txtFname" />
                </label>
                    <input type="Submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default uncontrolledForm