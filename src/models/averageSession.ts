export interface averageSessionData {
    day: number;
    sessionLength: number;
}

export class AverageSession {

    public sessions: averageSessionData[]

    constructor(data: any) {
        this.sessions = data.sessions
    }

}
