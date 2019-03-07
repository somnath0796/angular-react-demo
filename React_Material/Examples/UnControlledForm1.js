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
                    <input type="text" name="txtFname" ref="txtFname" defaultValue="Doe"/>
                </label>
                
                <p>Gender : </p>
                <label>
                    Male : 
                    <input type="radio" name="optGender" ref="optGender" value="male" defaultChecked/>
                </label>
                <label>
                    Female : 
                    <input type="radio" name="optGender" ref="optGender" value="female" />
                </label>
                <p>City :
                <select name="selCity" defaultValue="LON">
                    <option value="BLR">Bemgaluru</option>
                    <option value="NYC">New York</option>
                    <option value="LON">London</option>
                </select>
                </p>
                   <p> <input type="Submit" value="Submit"/></p>
                </form>
            </div>
        )
    }
}

export default uncontrolledForm