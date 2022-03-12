import axios from "axios";
import authHeader from "./auth-header";

const API = {
    homepage: "api/homepage/",
    login: "/api/login/",
    register: "/api/register/",
    
}

export async function  login(email, password, username = "") {
    
    return axios.post(API.login, {
      email,
      username,
      password
    }).then((res) => {
        alert('got here');
        if(res.data.accessToken){
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        alert('got past it');
        return res.data;
    });
}

export async function logout(){
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

export async function getShopItems() {
    const resp =  await fetch(API.homepage, {
      method: "GET",
      headers: authHeader()
    });
    console.log("got here");
    // you'll need to supply the function that checks the status here
    if (resp.ok) {
      const json = await resp.json();
      console.log(json);
      return json;
    } else {
        throw new Error(`Got back ${resp.status}`);
    }
}