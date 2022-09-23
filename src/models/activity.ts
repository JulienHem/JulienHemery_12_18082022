export type sessionsData = {
    day: string;
    kilogram: number;
    calories: number;
}


export class Activity {

    public sessions: sessionsData[]

    constructor(data: any) {
        this.sessions = data.sessions
    }

}
