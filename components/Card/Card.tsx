import styles from "./Card.module.scss";
import { numberWithCommas } from '../../module/common'
export default function Card({category,type, owner,accountNumber,month,year, balance=0,id, onDetele}){
    function deleteCard(){
        onDetele(id);
    }
    return (
        <div className={styles.container}>
            {owner}
            {type === 'Bank Account' && <div>Số dư tài khoản:{balance} </div>}
            <div className="">Số tài khoản: {accountNumber}</div>
            <div className="">Loại thẻ: {type}</div>
            <div className="">{month}/{year}</div>
            <button onClick={(id)=>deleteCard()}>Xoá</button>
        </div>
    )
}