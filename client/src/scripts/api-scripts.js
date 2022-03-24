import authHeader from "./auth-header";
import API_PATHS from "./api-paths";
import axios from "axios";

const API = API_PATHS();

export async function checkEmail(email){
  const values = {
    email: email
  }

  const headers = authHeader();

  const res = await axios.post(API.checkEmail, values, {headers});

  return res.data.valid;
}

export async function checkout(payment) {
  console.log('in checkout');
  const user = getCurrentUser();
  if(!(user instanceof Object)){
    return;
  }
  
  const values = {
    info: payment,
    accessToken: user.accessToken,
    userid: user._id,
    user: user,
    items: user.cart
  };

  const headers = authHeader();

  const res = await axios.post(API.checkout, values, {headers});
  console.log('finished checkout');
  return res.data;
}

export async function  login(email, password, username = "") {
  
  let values = {
    email: email,
    password: password,
    username: username
  }
  const headers = authHeader();

  const res = await axios.post(API.login, values, { headers });

  const data = res.data;

  if(data.accessToken){
    localStorage.setItem('user', JSON.stringify(data));
  }

  return data.message;
}

export async function logout(){
    localStorage.removeItem('user');
}

export async function register(email, password, username = "") {
  let values = {
      username: username,
      email: email,
      password: password
  };

  let headers = authHeader();
    
  const res = await axios.post(API.register, values, {headers});

  return res.data.message;
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export async function getShopItems() {

  const headers = authHeader();
  const values = {};

  const res = await axios.get(API.homepage, values, {headers});
  
  const data = res.data;
  return data;
}