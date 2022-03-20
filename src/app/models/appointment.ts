export class Appointment {
    constructor(public doctor: string, public patient: string, public bookingTime: string, public branch: string, public date: string, public recep: string, public paymentMethod: string, public totalAmount: number, public paidAmount: number) {

    }
}
