import {Activity} from "../models/activity";


/**
 * Route of the query
 * @param id
 */
function apiRoute(id: number) {
    return `http://localhost:3000/user/${id}/activity`
}

/**
 * @param { number } userId - ID of the user
 */

export async function getActivity(userId: number) {
    try {
        const data = await fetch(apiRoute(userId));
        const res = await data.json();
        return new Activity(res.data);
    } catch (e) {
        console.log(e)
    }
}
