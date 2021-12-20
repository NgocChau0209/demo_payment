import { useState } from "react";
import { useRouter } from "next/router";
import { bankAccountAPI } from "services/card";
import Card from "components/Card/Card";
import Button from "components/Button/Button";
import TextInput from "components/Input/TextInput";
import styles from "styles/pages/Card/Add.module.scss";

export default function AddCard() {
      const router = useRouter();
      const [registerInfo, setRegisterInfo] = useState({ name: '', cardnumber: '', expdate: '',  type: '' });
      const [error, setError] = useState({});
      const [monthExp , setMonthExp] = useState(null);
      const [yearExp , setYearExp] = useState(null);

      async function handleSubmit() {
            let errorObj = {};
            let { cardnumber, name, expdate } = registerInfo;

            /* check card number input */
            if (!cardnumber) {
                  errorObj = { ...errorObj, cardnumber: 'Vui lòng nhập số tài khoản' };
            }
            else {
                  deleteError("cardnumbers");
            }

            /* check name input */
            if (!name) {
                  errorObj = { ...errorObj, name: 'Vui lòng nhập tên chủ tài khoản' };
            }
            else {
                  deleteError("name");
            }

            /* check expdate input */
            if (!expdate) {
                  errorObj = { ...errorObj, expdate: 'Vui lòng nhập ngày hết hạn ' };
            }
            else {
                  let regexString = /\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/;
                  let isValiExpDate = regexString.test(expdate);
                  if(!isValiExpDate){
                        errorObj = { ...errorObj, expdate: 'Vui lòng kiểm tra lại ngày hết hạn' };
                  }
                  else{
                        let splitDate = expdate.split('/');
                        if(!splitDate) return;
                        setMonthExp(splitDate?.[0]);
                        setYearExp(splitDate?.[1]);
                  }
                  deleteError("expdate");
            }
            setError(errorObj)

            if (!Object.keys(error).length) {
                  let isSuccess = await bankAccountAPI.add(registerInfo);
                  if (isSuccess) {
                        router.back();
                  }
            }
      }

      function deleteError(field: string) {
            if (error.hasOwnProperty(field)) {
                  setError(delete error.field);
            }
      }

      async function getText(detail: any) {
            let { field, value } = detail;
            setRegisterInfo({ ...registerInfo, [field]: value });;
      }

      function getCategoryCard(value:string){
            setRegisterInfo({ ...registerInfo, type: value });;
      }

      return (
            <div className={styles.add_card}>
                  <div className={styles.card_simulation}>
                        <Card name={registerInfo.name} cardnumber={registerInfo.cardnumber} month={monthExp} year={yearExp} getCategoryCard={getCategoryCard}/>
                  </div>
                  <div className={styles.form_input}>
                        <TextInput label="Tên chủ tài khoản" name="name" getInfo={getText} stylesProps={{ input: { textTransform: "uppercase" } }} maxlength={20} error={error?.["name"]} />
                        <TextInput label="Số tài khoản" name="cardnumber" getInfo={getText} pattern="[0-9]*" inputmode="numeric" error={error?.["cardnumber"]} />
                        <TextInput label="Ngày hết hạn" name="expdate" stylesProps={{ input: { width: "240px" }, container: { marginRight: '20px' } }} getInfo={getText} pattern="[0-9]*" inputmode="numeric" error={error?.["expdate"]} />
                        <Button text="Thêm" onClickEvent={handleSubmit} />
                  </div>
            </div>
      )
}