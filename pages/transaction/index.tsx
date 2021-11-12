import { getTransactionList } from '../api/index.ts';
import { TransactionCard } from '../../components/Transaction/TransactionCard/TransactionCard';
export default function TransactionList({list}) {
    return (
        <div className="transaction">
            <div className="">
                {list.map((item, index) => {
                    return <TransactionCard {...item} key={index} isLastItem={index === list.length - 1} />
                })}
            </div>
        </div>

    )
}

export async function getStaticProps(){
    let res = await getTransactionList();
    return {
        props:{
            list: res
        }
    }
}