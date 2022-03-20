export class Invoice {
    constructor(public _id: string, public recep: string, public paymentMethod: string, public totalAmount: number, public paidAmount: number) {
    }

}
