import React, {useState} from 'react';
import {register} from '../scripts/auth-services';
const Register = (props) => {
    
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handleSubmit = async(event) => {
        await register(emailValue, passwordValue);
    }

    const handlePassword = (event) => {
        setPasswordValue(event.target.value);
    }

    const handleEmail = (event) => {
        setEmailValue(event.target.value);
    }

    return (<div className='register-div'>
        <form onSubmit={handleSubmit}>
            <label>Enter email</label>
            <input type="text" value={emailValue} name="email" onChange={handleEmail} />
            <label>Enter your password</label>
            <input type="password" value={passwordValue} name="password" onChange={handlePassword} />
            <input type="submit" value="submit"/>    
        </form> 
    </div>);
};

export default Register;