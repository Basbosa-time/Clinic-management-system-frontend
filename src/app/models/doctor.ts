export class Doctor {
    constructor(public name: string, public email: string, public password: string, public specialization: string, public schedule: Schedule[]) {
    }
}

class Schedule {
    constructor(public branch: string, public startTime: string, public endTime: string, public days: string[]) {
    }
}