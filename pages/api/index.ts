import { transactionList } from "../../data/transaction-list";
import { bankLinks } from '../../data/bank-link';

export async function getTransactionList(){
    return transactionList;
}

export async function getTransactionDetail(id){
    return transactionList.find(item=>item.uid===id)
}

export async function getCardList(){
    return bankLinks;
}

export async function getCardDetail(id) {
    return bankLinks.find(item=>item.id===id)
}

