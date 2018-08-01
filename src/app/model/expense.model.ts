export class Expense {

    constructor(public date: Date,
        public description: string,
        public amount: number,
    public type: string) {}
}