import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Message(props){
    let message = props.message;
    if(!message) {
        message = "Already logged in";
    }

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 5000);

    return (
    <div className='message-div'>
        <h1>Well...</h1>
        <h3>{message}</h3>
    </div>)
}