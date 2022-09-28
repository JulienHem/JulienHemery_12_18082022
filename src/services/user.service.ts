import User from "../models/user";

function apiRoute(id: number) {
    return `http://localhost:3000/user/${id}`
}

export async function getUser(id: number){
    try {
        const data = await fetch(apiRoute(id));
        const res = await data.json();
        return new User(res.data);
    } catch (e) {
        console.log(e)
    }
}


