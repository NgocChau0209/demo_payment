import styles from "./Transaction.module.scss"
import { ArrowLeftIcon } from 'components/Icon/ArrowLeft';
import { numberWithCommas } from 'module/common';
import { getDateUTC } from "module/date";

import { useRouter } from 'next/router';
interface TransactionCardProps{
    _id:string,
    income: number,
    time: Date,
    amount: number,
    title: string,
    isLastItem: boolean,
    message: string,
    key: any
}

export default function TransactionCard({_id, income, time, amount, title, message,key,isLastItem}:TransactionCardProps) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/transaction/${_id}`)
    }

    let isIncome = income === 1;
    return (
        <div className="" onClick={()=>handleClick()} key={key}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={isIncome ? styles.income : styles.outcome}>
                        <p>{getDateUTC(time)}</p>
                        <div className={isIncome ? styles.inner_layer__income : styles.inner_layer__outcome}>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.top}>
                        <p className={styles.title}>{title}</p>
                        <div className={styles.icon}>
                            <ArrowLeftIcon color="#484848" />
                        </div>

                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.message}>
                            {message}
                        </div>

                        <div className={isIncome ? styles.amount__income : styles.amount__outcome}>
                            {isIncome ? '+' : '-'}{numberWithCommas(amount)}
                        </div>
                    </div>
                </div>
            </div>
            {!isLastItem && <div className={styles.divide}></div>}
        </div>
    )
}