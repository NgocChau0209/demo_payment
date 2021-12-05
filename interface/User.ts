import { ITransaction } from "./Transaction";
export interface IUser {
    uid: string;
    email: string;
    phoneNumber: string;
    name: string;
    identify: string;
    userName: string;
    // balance: number;
    password: string;
    // // tài khoản liên kết
    // bankCard: [];
    // isAuthentication: boolean;
    // getUserInfo: (userId: string) => IUser
    // getTransactionList: (userId: string) => ITransaction[]
    // // rút tiền
    // withdraw: (amount: number) => boolean
    // // kiểm tra thanh toán giao dịch thành công hay không
    // checkStatusPayment: (transaction: number) => boolean
}