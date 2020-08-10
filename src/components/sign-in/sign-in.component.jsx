import React from 'react';
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {SignInWithGoogle, auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const{ email, password } = this.state;

        this.setState({email:'',password:''});

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        }catch(error){
        console.log(error)
        }
    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required 
                        label="email"
                    />

                    <FormInput 
                        type="password" 
                        name="password" 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        required
                        label="password"
                    />

                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn > {''} Sign in with Google {''} </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;