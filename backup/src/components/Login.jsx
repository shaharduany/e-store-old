import React, { useState } from "react";

const Login = (props) => {
    const [logged, setLogged] = useState(props.logged);

    const handleSubmit = (event) => {
        
    }

    return (<div className="login-div" hidden={!logged}>
            <form onSubmit={handleSubmit}>
                <label>Login to the store</label>
                <br />
                <input type="email" name="email" value="Enter your email"/>
                <br />
                <input type="password" name="passw" value="Enter your password" />
                <br />
                <input type="submit" />
        </form>
    </div>);
};

export default Login;