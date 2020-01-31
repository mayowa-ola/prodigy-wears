import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends Component {
    state = { 
        email:'',
        password: ''
     }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    }

    render() { 
        return ( 
            <div className='sign-in'>
                <h2>I alredy have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" 
                        name="email" 
                        value={this.state.email} 
                        label="Email"
                        handleChange={this.handleChange} required/>
                    
                    <FormInput type="password" 
                        name="password" 
                        value={this.state.password}
                        label="Password"
                        onChange={this.handleChange} required/>
                    

                    <CustomButton type="submit" >Sign In </CustomButton>
                </form>
            </div>
         );
    }
}
 
export default SignIn;