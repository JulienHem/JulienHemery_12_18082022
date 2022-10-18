export interface performanceData {
    value: number;
    kind: number;
}

export class Performance {

    public kind: Object;
    public data: performanceData[];

    constructor(data: any) {
        this.kind = data.kind;
        this.data = data.data;
    }
}