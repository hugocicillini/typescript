import { DioAccount } from "./DioAccount";

export class OtherAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositBonus = (cash: number): void => {
        let bonus: number = 10
        let total: number = cash + bonus
        console.log("Você depositou: R$" + cash + " e ganhou um bônus de: R$" + bonus + ", totalizando: R$" + total)
    }
}