import { useState } from "react";
import { userAPI } from "services/user";
import { transactionAPI } from "services/transaction";
import Button from "components/Button/Button";
import TextInput from "components/Input/TextInput";

const TransferMoney = () => {
      let [transferData, setTransferData] = useState({ amount: 0, recieverPhoneNumber: '', message: '', recieverId: '', recieverName: '' });
      let timeoutSearchPhone: any = null;

      function handleSubmit() {
            if (!timeoutSearchPhone) {
                  let info = {
                        to: transferData.recieverId,
                        amount: transferData.amount,
                        message: transferData.message
                  }
                  transactionAPI.deposit(info);
            }
      }

      function getText(detail: any) {
            let { field, value } = detail;
            if (field === 'recieverPhoneNumber') {
                  if (timeoutSearchPhone) clearTimeout(timeoutSearchPhone)
                  timeoutSearchPhone = setTimeout(async () => {
                        let reciever = await userAPI.checkPhoneNumber(value);
                        setTransferData({
                              ...transferData,
                              recieverName: reciever.userName,
                              recieverPhoneNumber: reciever.phoneNumber,
                              recieverId: reciever._id,
                        })
                  }, 1000);
            }

            else {
                  setTransferData({ ...transferData, [field]: value })
            }
      }

      return (
            <>
                  <TextInput label="Số điện thoại người nhận" name="recieverPhoneNumber" getInfo={getText} />
                  <TextInput label="Họ tên người nhận" name="recieverName" value={transferData['recieverName']} isDisabled={true} />
                  <TextInput label="Số tiền" name="amount" inputType="number" getInfo={getText} />
                  <TextInput label="Lời nhắn" name="message" inputType="text" getInfo={getText} />
                  <Button text="Chuyển tiền" onClickEvent={handleSubmit} />
            </>
      )
}
export default TransferMoney;