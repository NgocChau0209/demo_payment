import IAccountHolder from "./AccountHolder";
export default interface ITransaction {
    uid: string;
    date: string;
    amount: number;
    gateway: IAccountHolder;
    content: string;
    title: string;
    to?: string;
    message: string;
    token: string;
    from: string;
}