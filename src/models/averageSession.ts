export class AverageSession {

    public day: string;
    public sessionLength: number;

    constructor(data: any) {
        this.day = data.day;
        this.sessionLength = data.kilogram;
    }

}
