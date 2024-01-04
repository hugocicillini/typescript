export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    // setName = (name: string): void => {
    //     this.name = name
    //     console.log('Nome alterado com sucesso!')
    // }

    getName = (): string => {
        return this.name
    }

    deposit = (cash: number): void => {
        if (this.validateStatus()) {
            console.log("Depósito Realizado:" + "R$" + cash)
            this.balance = cash
        }
    }

    withdraw = (): void => {
        console.log('Saque Realizado!')
    }

    getBalance = (cash: number): void => {
        if (this.balance > cash && this.status) {
            console.log(this.balance - cash)
        }
        else {
            console.log("Saldo Insuficiente!")
        }
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta Inválida')
    }
}