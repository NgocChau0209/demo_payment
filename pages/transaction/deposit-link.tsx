import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { numberWithCommas } from "module/common";
import { transactionAPI } from "services/transaction";
import Title from "components/Title/Title";
import Button from "components/Button/Button";
import Dialog from "components/Dialog/Dialog";
import styles from "styles/pages/DepositLink.module.scss";

export default function DepositLink() {
      const router = useRouter()
      const { token } = router.query;
      const [info, setInfo] = useState({});
      const [dialog, setDialog] = useState({ isShow: false, message: '' });
      let userId = useSelector((state) => state?.user?.info?._id);

      useEffect(() => {
            async function getInfo() {
                  if (token) {
                        const res = await transactionAPI.depositLinkInfo(token);
                        setInfo(res);
                  }
            }
            getInfo();
      }, [token]);

      async function goToDeposit() {
            // let userId = user._id;
            let sendMoneyInfo = {
                  from: userId,
                  amount: info.amount,
                  to: info.to,
                  token
            }

            const res = await transactionAPI.deposit(sendMoneyInfo);
            if (!res.message) {
                  router.push('/transaction/success');
            }
            else {
                  let message =  res.message;
                  setDialog({ isShow: true, message });
            }
      }

      console.log(dialog);

      function closeDialog() {
            setDialog({ isShow: false, message:'' })
      }
      return (
            <>
                  <Title text={"Thông tin giao dịch"} />
                  <div className={styles.container}>
                        Người nhận : {info?.recieveUser?.userName || ""}
                        <div className={styles.lineBreak}></div>
                        Lời nhắn: {info?.message || ""}
                        <div className={styles.lineBreak}></div>

                        Số tiền: {numberWithCommas(info?.amount || 0)}
                        <div className={styles.lineBreak}></div>
                        <Button text="Gửi" onClickEvent={goToDeposit} />

                        {dialog.isShow && <Dialog content={dialog.message} isOpen={dialog.isShow} />}
                  </div>
            </>
      )
}