import { convertDateTimeToTimeStamp } from '../module/date';

export let transactionList =[
    {
        uid: 'av',
        type: 'outcome',
        to: "CircleK Việt Nam",
        title: 'Thanh toán circleK',
        message:'Tiki đã liên hệ Quý khách để giao đơn hàng',
        date: convertDateTimeToTimeStamp('20/2/2020'),
        amount: 20000,
        gateway: {
            name: ''
        },
    },
    {
        uid: '0xe143',
        date: convertDateTimeToTimeStamp('25/10/2021'),
        type: 'income',
        from: "Nguyễn Thị Hiệp",
        title: 'Nhận tiền',
        message:"Đổi tiền mặt",
        amount: 20000,
        gateway: {
            name: ''
        },
    }
]