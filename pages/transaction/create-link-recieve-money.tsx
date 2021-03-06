import { useState } from "react";
import { useRouter } from "next/router";
import { transactionAPI } from "services/transaction";
import Button from "components/Button/Button";
import TextInput from "components/Input/TextInput";

const CreateLinkRecieveMoney = () => {
      const [createLinkData, setCreateLinkData] = useState({
            amount: 0,
            message: ''
      })
      const router = useRouter();

      async function handleSubmit() {
            if (createLinkData.amount) {
                  let res = await transactionAPI.createLink(createLinkData)
                  router.push(`/transaction/success-link?token=${res}`)
            }
      }

      async function getText(detail: any) {
            let { field, value } = detail;
            setCreateLinkData({ ...createLinkData, [field]: value })
      }


      return (
            <>
                  <TextInput label="Số tiền muốn nhận" getInfo={getText} name="amount" inputType="number"/>
                  <TextInput label="Tạo link" getInfo={getText} name="message" inputType="text"/>
                  <Button text="Tạo link" onClickEvent={handleSubmit} />
            </>
      )
}
export default CreateLinkRecieveMoney;