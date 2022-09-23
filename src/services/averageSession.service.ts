import {AverageSession} from "../models/averageSession";

function apiRoute(id: number) {
    return `http://localhost:3000/user/${id}/average-session`
}

export async function getAverageSession(userId: number) {
    try {
        const data = await fetch(apiRoute(userId));

        const res = await data.json();
        console.log(res)
        return new AverageSession(res.data);
    } catch (e) {
        console.log(e)
    }
}
