import axios from "axios";
import authHeader from "./auth-header";

const API = {
    login: "/api/login",
    register: "/api/register",

}

export function login(email, password, username = "") {
    const values = {
        
    }
    return axios.post(API.login, {
        email,
        username,
        password
    }).then((res) => {
        alert('got here');
        if (res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        alert('got past it');
        return res.data;
    });
}

export async function logout() {
    localStorage.removeItem('user');
}

export async function register(email, password, username = "") {
    let values = {
        username,
        email,
        password
    };

    const res = await axios.post(API.register, values);

    return res;
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}