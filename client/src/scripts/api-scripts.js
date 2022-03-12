import authHeader from "./auth-header";

const API = {
  homepage: "api/homepage/",
  login: "/api/login/",
  register: "/api/register/",    
}

export async function  login(email, password, username = "") {
  let values = {
    email: email,
    password: password,
    username: username
  }

  const res = await fetch(API.login, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(values)
  });
  
  if(!res.ok){
    throw new Error('Got back ' + res.status);
  }

  const json = await res.json();

  if(json.accessToken){
    localStorage.setItem('user', JSON.stringify(json));
  }

  alert('got past it');
  return json;
}

export async function logout(){
    localStorage.removeItem('user');
}

export async function register(email, password, username = "") {
  alert('in register');
    let values = {
        username: username,
        email: email,
        password: password
    };

    const res = await fetch(API.register, {
      method: "POST",
      headers: authHeader(),
      body: JSON.stringify(values)
    })

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
    
    // you'll need to supply the function that checks the status here
    if (resp.ok) {
      const json = await resp.json();
      console.log(json);
      return json;
    } else {
        throw new Error(`Got back ${resp.status}`);
    }
}