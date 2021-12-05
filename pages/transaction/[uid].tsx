import {convertTimestamptoDatetime} from '../../module/date';

function TransactionDetail(){
    
    return(<div className=''>
       <h1>Lịch sử giao dịch</h1> 
       <div className="transaction-detail__item">
            <p className="transaction-detail__title">
                Mã giao dịch
            </p>
            <p className="transaction-detail__value">
                {detail.id}
            </p>
       </div>   
       <div className="transaction-detail__item">
            <p className="transaction-detail__title">
                Ngày giao dịch 
            </p>
            <p className="transaction-detail__value">
                {convertTimestamptoDatetime(detail.date)}
            </p>
       </div>   
       <div className="transaction-detail__item">
            <p className="transaction-detail__title">
                Nội dung
            </p>
            <p className="transaction-detail__value">
                {detail.message}
            </p>
       </div>   
    </div>)
}

export default  TransactionDetail;