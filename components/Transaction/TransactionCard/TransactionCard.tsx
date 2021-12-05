import classes from "classnames";
import styles from "./Transaction.module.scss"
import { ArrowLeftIcon } from '../../Icon/ArrowLeft';
import { numberWithCommas } from '../../../module/common';
import { convertUTCToDateTime, getDate, getDateUTC } from "../../../module/date";

import { useRouter } from 'next/router'

export function TransactionCard({_id, income, time, amount, title, message,key,isLastItem}) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/transaction/${_id}`)
    }

    let isIncome = income === 1;
    return (
        <div className="" onClick={()=>handleClick()} key={key}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={classes(styles.date, isIncome ? styles.income : styles.outcome, "h3-32")}>
                        <p>{getDateUTC(time)}</p>
                        <div className={classes(styles.inner_layer, isIncome ? styles.inner_layer__income : styles.inner_layer__outcome)}>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.top}>
                        <p className={classes(styles.title, "tag-18",)}>{title}</p>
                        <div className={styles.icon}>
                            <ArrowLeftIcon color="#484848" />
                        </div>

                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.message}>
                            {message}
                        </div>

                        <div className={classes(isIncome ? styles.amount__income : styles.amount__outcome, "tag-18")}>
                            {isIncome ? '+' : '-'}{numberWithCommas(amount)}
                        </div>
                    </div>
                </div>
            </div>
            {!isLastItem && <div className={styles.divide}></div>}
        </div>
    )
}