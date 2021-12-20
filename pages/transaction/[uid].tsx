import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { changeDateDDMMYYYY } from "module/date";
import { numberWithCommas } from 'module/common';
import { transactionAPI } from 'services/transaction';
import TextInput from 'components/Input/TextInput';

function TransactionDetail() {
    const router = useRouter()
    const { uid } = router.query;
    const [transactionDetail, setTransactionDetail] = useState({});

    let isIncome = transactionDetail?.income === 1;

    useEffect(() => {
        async function getDetail() {
            let detail = await transactionAPI.getInfo(uid);
            setTransactionDetail(detail);
        }

        uid && getDetail();
    }, [uid])
    console.log(transactionDetail)

    return (
        <>
            <h1>Lịch sử giao dịch</h1>
            <TextInput value={transactionDetail?._id} label="Mã giao dịch" isDisabled={true} />
            <TextInput value={transactionDetail?.sender?.userName} label="Người gửi" isDisabled={true} />
            <TextInput value={transactionDetail?.reciever?.userName} label="Người nhận" isDisabled={true} />
            <TextInput value={`${isIncome ? '+' : '-'} ${numberWithCommas(transactionDetail?.amount)}`} label="Số tiền giao dịch" isDisabled={true} />
            <TextInput value={transactionDetail?.message} label="Nội dung" isDisabled={true} />
            <TextInput value={transactionDetail.time} label="Ngày giao dịch" isDisabled={true} />

        </>

    )
}

export default TransactionDetail;