import { ITransaction } from "./Transaction";
export interface IUser{
    uid: string;
    name: string;
    // tài khoản liên kết
    bankCard:[];
    isAuthentication: boolean;
    getUserInfo: (userId:string)=> IUser
    getTransactionList:(userId:string)=>ITransaction[]
    // rút tiền
    withdraw:(amount:number)=> boolean
    // kiểm tra thanh toán giao dịch thành công hay không
    checkStatusPayment:(transaction:number)=>boolean
}