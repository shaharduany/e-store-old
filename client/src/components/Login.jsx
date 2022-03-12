import React, { useState } from "react";
import { login } from "../scripts/api-scripts";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


const Login = (props) => {
    const [logged, setLogged] = useState(false);

    const [password, setPassword] = useState("");
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const [email, setEmail] = useState("");
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleSubmit = (event) => {
        alert(email + " " + password);
        login(email, password);
    }

    return (<div className="login-div" hidden={logged}>
                <Form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="username">Email</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={email}
                        onChange={handleEmail}
              /     >
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                    type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div>
                <Input
                    type="submit"
                    value="SUBMIT"
                 />
            </div>
            </Form>
            </div>);
};

export default Login;