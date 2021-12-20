import classnames from "classnames";
import { useRouter } from "next/router";
import { numberWithCommas } from 'module/common';
import { changeDateDDMMYYYY } from "module/date";
import styles from "./Transaction.module.scss";

interface TransactionCardProps {
      _id: string,
      income: number,
      time: Date,
      amount: number,
      title: string,
}

export default function TransactionCard({ income, time, amount, title, _id }: TransactionCardProps) {
      let router = useRouter();
      function goToDetailTransaction(uid: string) {
            router.push(`/transaction/${uid}`)
      }

      return (
            <div className={classnames(styles.task_box,income ? styles.green : styles.red)} onClick={() => { goToDetailTransaction(_id) }}>
                  <div className={styles.description_task}>
                        <div className={styles.time}>{changeDateDDMMYYYY(time)}</div>
                        <div className={classnames(styles.task_name, 'tag-18')}>{title}</div>
                  </div>
                  <p>{income ? '+' : '-'}{numberWithCommas(amount)}</p>
                  <div className={styles.more_button}></div>
            </div>
      )
}