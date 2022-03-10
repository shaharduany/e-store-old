import authHeader from "./auth-header";

export default async function login(username = "", email, password) {
    const values = {
        username: username,
        email: email, 
        password: password
    };

    const res = await fetch("/api/login", {
        method: "POST",
        headers: authHeader,
        body: JSON.stringify(values)
    });

    if(res.data.accessToken){
        localStorage.setItem('user', res.data);
    }

    return res.data;
}

export default async function logout(){
    localStorage.removeItem
}

export default async function register(username = "", email, password) {
    let values = {
        username: username,
        email: email,
        password: password
    };

    const res = await fetch("/api/register", {
        method: "POST",
        headers: authHeader,
        body: JSON.stringify(values)
    });
}

export default function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}