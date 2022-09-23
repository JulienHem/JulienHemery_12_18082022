import {Activity} from "../models/activity";

function apiRoute(id: number) {
    return `http://localhost:3000/user/${id}/activity`
}

export async function getActivity(userId: number) {
    try {
        const data = await fetch(apiRoute(userId));
        const res = await data.json();
        console.log(res)
        return new Activity(res.data);
    } catch (e) {
        console.log(e)
    }
}
