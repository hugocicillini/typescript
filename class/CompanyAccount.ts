import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (loan: number, status: boolean, balance: number): void => {
        if (status) {
            console.log(balance + loan)
        }
    }
}