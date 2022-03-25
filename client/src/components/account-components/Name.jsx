import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

export default function Name(props){
    let user = props.user;
    const email = user.email;
    const name = user.username;

    return (<div>
        <Alert>
            <Alert.Heading>ACCOUNT</Alert.Heading>
            <h3>Hello, {name ? name: "Welcome Back!"}</h3>
            <p>Email address: {email}</p>
        </Alert>
    </div>)
}