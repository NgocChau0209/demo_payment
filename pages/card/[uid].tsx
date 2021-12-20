import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { bankAccountAPI } from 'services/card';
import BankCard from 'components/Card/Card';
import Button from "components/Button/Button";
import styles from "styles/pages/Card/Add.module.scss";
import TextInput from "components/Input/TextInput";

export default function CardDetail() {
      const router = useRouter();
      let { uid } = router.query;
      let [buttonText, setButtonText] = useState('Sửa')
      let [cardDetail, setCardDetail] = useState({ accountNumber: '', accountHolder: '', expdate: '', type: '' });

      function getValueForm(detail: any) {
            let { field, value } = detail;
            setCardDetail({ ...cardDetail, [field]: value });
      }

      async function handleSubmit() {
            if (buttonText === "Sửa") {
                  setButtonText("Lưu")
            }
            else {
                let isSuccess =  await bankAccountAPI.modifyCard(cardDetail);
                if(isSuccess){
                      
                }
            }
      }

      useEffect(() => {
            async function getDetail() {
                  let detail = await bankAccountAPI.getInfo(uid);
                  setCardDetail(detail);
            }
            uid && getDetail();
      }, [uid])

      function getCategoryCard(value: string) {
            setCardDetail({ ...cardDetail, type: value });;
      }

      return (
            <div className={styles.add_card}>
                  <div className={styles.card_simulation}>
                        <BankCard name={cardDetail.accountHolder} cardnumber={cardDetail.accountNumber} isLoadInfo={true} getCategoryCard={getCategoryCard} />
                  </div>
                  <div className={styles.form_input}>
                        <TextInput label="Tên chủ tài khoản" name="accountHolder" getInfo={getValueForm} stylesProps={{ input: { textTransform: "uppercase" } }} maxlength={20} value={cardDetail["accountHolder"]} isDisabled={buttonText === "Sửa"} />
                        <TextInput label="Số tài khoản" name="accountNumber" getInfo={getValueForm} pattern="[0-9]*" inputmode="numeric" value={cardDetail["accountNumber"]} isDisabled={buttonText === "Sửa"} />
                        <TextInput label="Ngày hết hạn" name="expdate" stylesProps={{ input: { width: "240px" }, container: { marginRight: '20px' } }} getInfo={getValueForm} pattern="[0-9]*" inputmode="numeric" value={cardDetail["expdate"]} isDisabled={buttonText === "Sửa"} />
                        <Button text={buttonText} onClickEvent={handleSubmit} />
                  </div>
            </div>
      )
}