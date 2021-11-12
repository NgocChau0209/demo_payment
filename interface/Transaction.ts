import { IAccountHolder } from "./AccountHolder";
export interface ITransaction{
    uid: string;
    date: string;
    amount: number;
    gateway: IAccountHolder;
    content: string;
    title:string;
}