import React from 'react';
import SignIn from '../../components/signin/sign-in.component';
import SignUp from '../../components/signup/sign-up.component';

import './sign-in-and-sign-up-page.scss'

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage