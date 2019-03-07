import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';



class FormContainer extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            userData : {
                name : '',
                useremail : '',
                age : '',
                gender : '',
                phone : '',
                languages : []
            },
            validity : {
                name : false,
                useremail : false,
                age : false,
                gender : false,
                phone : false,
                languages : false
            },
            genderOptions : ['Male', 'Female', 'Others'],
            languageOptions : ['English', 'Hindi', 'French']
        }
        this.fullNameHandler = this.inputHandler.bind(this);
        this.emailHandler = this.inputHandler.bind(this);
        this.ageHandler = this.inputHandler.bind(this);
        this.genderHandler = this.inputHandler.bind(this);
        this.phoneHandler = this.inputHandler.bind(this);
        this.languageHandler = this.checkboxHandler.bind(this);

        this.submitHandler = this.submitForm.bind(this);
        this.resetHandler = this.resetForm.bind(this);

    }

    inputHandler(e){
        let name = e.target.name;
        //alert(name);
        let value = e.target.value;
        if(value !==''){
        this.setState(prevState => ({
            validity : {
                ...prevState.validity,
                [name] : true
            }
            }))
        }
        this.setState(
            prevState => ({
                userData : {
                    ...prevState.userData,
                    [name] : value
                }
            })
        )
    }

    checkboxHandler(e){
        let newLanguage = e.target.value;
        let newLanguageArray;
        if(this.state.userData.languages.indexOf(newLanguage) > -1){
            newLanguageArray = this.state.userData.languages.filter(s => s !== newLanguage)
        }
        else 
        {
            newLanguageArray = [...this.state.userData.languages, newLanguage]
        }
        this.setState(prevState => ({
            userData : {
                ...prevState.userData, languages : newLanguageArray
            },
            validity : {
                ...prevState.validity,
                languages : true
            }
        }))
    }

    submitForm(e){
        e.preventDefault();
        for(let prop in this.state.validity){
            console.log(prop + " : " + this.state.validity[prop]);
            if(!this.state.validity[prop]){
                alert(prop + ' has invalid data!');
                //break;
                return false;
            }
        }
        //if (this.state.validity.length > 0)
        //    alert('Invalid input');
        
            let currUserData = this.state.userData;
            if (currUserData.name === ''){
                alert("Invalid Input")
                console.log(currUserData);
                console.log(currUserData.languages)
            }
        
    }
    resetForm(e){
        e.preventDefault();
        this.setState({
            userData : {
                name : '',
                useremail : '',
                age : '',
                gender : '',
                phone : ''
            }
        })
    }
    render() {
    return (
        <form className = "container" onSubmit="{this.submitHandler}">
            <Input type={'text'}
                title={'Name'} name={'name'}
                value={this.state.userData.name}
                placeholder={'Please enter your name'}
                changeHandler={this.fullNameHandler}/>
            <Input type={'email'} title={'Email'} name={'useremail'}
                value={this.state.userData.email}
                placeholder={'Please enter email'}
                changeHandler={this.emailHandler}/>
            <Input type={'number'} title={'Age'} name={'age'}
                value={this.state.userData.age}
                placeholder={'Please enter your age'}
                changeHandler={this.ageHandler}/>
            <Select title={'Gender'} name={'gender'} 
                options={this.state.genderOptions} 
                value={this.state.userData.gender}
                placeholder={'Please select gender'}
                changeHandler={this.genderHandler}/>
            <Input type={'tel'} title={'Telephone'} name={'phone'}
                value={this.state.userData.phone}
                placeholder={'Please enter phone number'}
                changeHandler={this.phoneHandler}/>
            <Checkbox title={'Languages'}
                 name={'skills'}
                 options={this.state.languageOptions}
                 selectedOptions={this.state.userData.languages}
                 changeHandler={this.languageHandler} />
            <Button title={'Submit'} type={'submit'} action={this.submitHandler}/>
            <Button title={'Reset'} type={'reset'} action={this.resetHandler}/>

        </form>
    )
    }
   
}
export default FormContainer