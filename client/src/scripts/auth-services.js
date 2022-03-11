import authHeader from "./auth-header";

export async function login(email, password, username= "") {
    const values = {
        username: username,
        email: email, 
        password: password
    };

    const res = await fetch("/api/login", {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(values)
    });

    if(res.data.accessToken){
        localStorage.setItem('user', res.data);
    }

    return res.data;
}

export async function logout(){
    localStorage.removeItem
}

export async function register(email, password, username = "") {
    let values = {
        username: username,
        email: email,
        password: password
    };

    alert('in register')

    const res = await fetch("/api/register", {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(values)
    });
    const json = await res.json();
    alert(json + "\n got this response");
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}