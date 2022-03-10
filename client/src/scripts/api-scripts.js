import authHeader from "./auth-header";

export async function getShopItems() {
    const resp =  await fetch(`/api/homepage/`, {
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

export async function registerPost(values){
  
  const resp = await fetch('/api/register/', {
    method: "POST",
    header: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  });

  const json = await resp.json();
  
  alert(json);
}