// let b: string = 'b'
// let n: number = 2
// let x: boolean

// let m: string | number = 2
// m = "hugo"

// 

// interface Pessoa {
//     nome: string,
//     idade: number,
//     profissao?: string
// }

// const pessoa: Pessoa = {
//     nome: "hugo",
//     idade: 10
// }

// const outraPessoa: Pessoa = {
//     nome: "pedro",
//     idade: 10,
//     profissao: "dev"
// }

// const arrayPessoa: Array<Pessoa> = [
//     pessoa,
//     outraPessoa
// ]

// const arrayNum: number[] = [
//     1, 2, 3
// ]

// const arrayString: Array<string> = [
//     "a", "b", "c"
// ]

import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { OtherAccount } from "./class/OtherAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Hugo', 10)
peopleAccount.deposit(100)
peopleAccount.getBalance(11)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('Inter', 20)
companyAccount.getLoan(1000, true, 10)
console.log(companyAccount)

const otherAccount: OtherAccount = new OtherAccount('Other', 30)
otherAccount.depositBonus(100)
console.log(otherAccount)