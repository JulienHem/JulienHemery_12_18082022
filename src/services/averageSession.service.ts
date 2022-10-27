import {AverageSession} from "../models/averageSession";

/**
 * Route of the query
 * @param id
 */

function apiRoute(id: number) {
    return `http://localhost:3000/user/${id}/average-sessions`
}

/**
 * Retrieve the average session of the user
 * @param userId
 */

export async function getAverageSession(userId: number) {
    try {
        const data = await fetch(apiRoute(userId));
        const res = await data.json();
        return new AverageSession(res.data);
    } catch (e) {
        console.log(e)
    }
}
