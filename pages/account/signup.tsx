import { useState } from "react";
import { useRouter } from "next/router";
import { userAPI } from "services/user";
import { validatePhoneNumber } from "module/validate";
import Image from "next/image";
import IUser from 'interface/User';
import classesnames from "classnames";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import Background from "public/images/login.jpeg";
import TextInput from "components/Input/TextInput";
import styles from "styles/pages/Login.module.scss";


export default function SignUp() {
      const [signupData, setSignupData] = useState<IUser>({ phoneNumber: '', userName: '', password: '' });
      // format error : {[field]: message}
      const router = useRouter();
      const [error, setError] = useState({});

      async function handleSubmit() {
            let errorObj = {};
            if (!timeoutSearchPhone) {
                  let { password, phoneNumber, userName } = signupData;
                  // check phone number input
                  if (!phoneNumber) {
                        errorObj = { ...error, phoneNumber: 'Vui lòng nhập số điện thoại' };
                  }
                  else {
                        deleteError("phoneNumber");
                  }
                  // check phone user input
                  if (!userName) {
                        errorObj = { ...error, password: 'Vui lòng nhập họ tên' };
                  }
                  else {
                        deleteError("userName");
                  }
                  // check pass input
                  if (!password) {
                        errorObj = { ...error, password: 'Vui lòng nhập mật khẩu' };
                  }
                  else {
                        deleteError("password");
                  }
                  setError({ ...error, errorObj });
                  // sign up 
                  if (!Object.keys(error).length) {
                        let isSuccess = await userAPI.signUp(signupData);
                        if (isSuccess) {
                              router.push('/account/login');
                        }
                  }
            }
      }

      function deleteError(field: string) {
            if (error.hasOwnProperty(field)) delete error.field;
      }

      let timeoutSearchPhone: any = null;
      function getText(detail: any) {
            let { field, value } = detail;
            if (field === 'phoneNumber') {
                  if (timeoutSearchPhone) clearTimeout(timeoutSearchPhone);
                  timeoutSearchPhone = setTimeout(async () => {
                        let isExPhoneNumber = await userAPI.checkPhoneNumber(value);
                        if (isExPhoneNumber) {
                              setError({ ...error, "phoneNumber": 'Số điện thoại này đã được sử dụng' })
                              return;
                        }
                        else {
                              deleteError("phoneNumber");
                        }
                  }, 1000);
            }
            setSignupData({ ...signupData, [field]: value })
      }

      return (

            <Modal>
                  <div className={styles.signin_form}>
                        <div className={styles.signin_container}>
                              <div className={styles.signin_content}>
                                    <TextInput label="Họ tên" name="userName" getInfo={getText} error={error?.userName} stylesProps={{ input: { width: '250px' } }} />
                                    <TextInput label="Số điện thoại" name="phoneNumber" getInfo={getText} error={error?.["phoneNumber"]} stylesProps={{ input: { width: '250px' } }} />
                                    <TextInput label="Mật khẩu" name="password" inputType="password" getInfo={getText} error={error?.["password"]} stylesProps={{ input: { width: '250px' } }} />
                              </div>
                              <div className={styles.signin_button}>
                                    <Button text="Đăng kí" onClickEvent={handleSubmit} />
                              </div>
                        </div>
                        <div className={styles.overlay}>
                              <Image src={Background} alt="" width="500" height="700" quality="50" />
                        </div>

                  </div>
            </Modal>
      )
}