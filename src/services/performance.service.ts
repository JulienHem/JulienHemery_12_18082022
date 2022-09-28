import {Performance} from "../models/performance";

function apiRoute(id: number) {
    return `http://localhost:3000/user/${id}/performance`
}

export async function getPerformance(userId: number) {
    try {
        const data = await fetch(apiRoute(userId));
        const res = await data.json();
        return new Performance(res.data);
    } catch (e) {
        console.log(e)
    }
}
