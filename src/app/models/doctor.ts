import { Schedule } from "./schedule";

export class Doctor {
    constructor(public name: string, public email: string, public password: string, public specialization: string, public schedule: Schedule[]) {
    }
}

