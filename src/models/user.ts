type userInfos = {
    firstName: string;
    lastName: string;
    age: number;
}

interface keyData {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount:  number;
}

/**
 * Model of the user, call it to initialize it after a query
 */

export default class User {

    public id: number;
    public userInfos: userInfos;
    public todayScore: number;
    public keyData: keyData;

    constructor(data: any) {
        this.id = data.id;
        this.userInfos = data.userInfos;
        this.todayScore = data.todayScore;
        this.keyData = data.keyData
    }
}
