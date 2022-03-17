import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Message(props){
    let message = (props.message) ? props.message : "Already logged in";
    let path = (props.path) ? props.path : "/";

    const navigate = useNavigate();

    setTimeout(() => {
        navigate(path);
    }, 5000);

    return (
    <div className='message-div'>
        <h1>Well...</h1>
        <h3>{message}</h3>
        <h4>Redirecting...</h4>
    </div>)
}