import { getTransactionDetail } from '../api';
import { getTransactionList } from '../api/index.ts';
import {convertTimestamptoDatetime} from '../../module/date';

function TransactionDetail({detail}){
    
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

export async function getStaticPaths() {
    const res = await  getTransactionList();
    // Get the paths we want to pre-render based on posts
    const paths = res.map((item) => ({
      params: { uid: item.uid },
    }))

    return { paths, fallback: false }
}


export const getStaticProps = async({params}) => {
    let id = params.id;
    let res = await getTransactionDetail('av');
    return {
        props: {
          detail: res,
        },
    }
}

export default  TransactionDetail;