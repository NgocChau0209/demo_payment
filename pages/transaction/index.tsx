import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { transactionAPI } from 'services/transaction';
import Button from "components/Button/Button";
import TransactionCard from 'components/Transaction/TransactionCard/TransactionCard';

export default function TransactionList() {
    let [transactionList, setTransactionList] = useState([]);
    const router = useRouter()
    function goToCreateLink() {
        router.push('/transaction/create-link-recieve-money')
    }

    useEffect(() => {
        async function getTransactionList() {
            let list = await transactionAPI.getAll();
            setTransactionList(list);
        }
        // getTransactionList();
    }, [])
    
    return (
        <div className="transaction">
            <Button text="Tạo link nhận tiền" onClickEvent={goToCreateLink} />
            <div className="">
                {transactionList.map((item, index) => {
                    return <TransactionCard {...item} key={index} isLastItem={index === transactionList.length - 1} />
                })}
            </div>
        </div>

    )
}