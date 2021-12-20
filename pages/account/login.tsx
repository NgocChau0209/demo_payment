import { useState } from "react";
import { userAPI } from "services/user";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUserInfoRedux } from "module/redux";
import { checkLoginAction } from "controller/redux/action/user";
import Image from "next/image";
import IUser from 'interface/User';
import classesnames from "classnames";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import Background from "public/images/login.jpeg";
import TextInput from "components/Input/TextInput";
import styles from "styles/pages/Login.module.scss";

export default function Login() {
      const [signupData, setSignupData] = useState<IUser>({ phoneNumber: '', password: '' });
      // format error : {[field]: message}
      const [error, setError] = useState({})
      const router = useRouter();

      const dispatch = useDispatch();
      async function handleSubmit() {
            let { password, phoneNumber } = signupData;
            let errorObj = {};
            /* check phone input */
            if (!phoneNumber) {
                  errorObj = { ...errorObj, phoneNumber: 'Vui lòng nhập số điện thoại' };

            }
            else {
                  deleteError("phoneNumber");
            }

            /* check password input */
            if (!password) {
                  errorObj = { ...errorObj, password: 'Vui lòng nhập mật khẩu' };
            }
            else {
                  deleteError("password");
            }
            setError({...error,errorObj});
            /* sign up */
            if (!Object.keys(errorObj).length) {
                  let userInfo = await userAPI.login(signupData)
                  if (userInfo && Object.keys(userInfo).length) {
                        setUserInfoRedux(userInfo);
                        dispatch(checkLoginAction(true));
                        router.push('/');
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
            setSignupData({ ...signupData, [field]: value })
      }

      return (
            <Modal>
                  <div className={styles.signin_form}>
                        <div className={styles.signin_container}>
                              <div className={styles.signin_content}>
                                    <TextInput label="Số điện thoại" name="phoneNumber" getInfo={getText} stylesProps={{ input: { width: '250px' } }} error={error?.["phoneNumber"]} />
                                    <TextInput label="Mật khẩu" name="password" inputType="password" getInfo={getText} stylesProps={{ input: { width: '250px' } }} error={error?.["password"]} />
                              </div>
                              <a href="/account/signup" className={classesnames(styles.signup, 'text-14')}>Tôi chưa có tài khoản</a>
                              <div className={styles.signin_button}>
                                    <Button text="Đăng nhập" onClickEvent={handleSubmit} />
                              </div>
                        </div>
                        <div className={styles.overlay}>
                              <Image src={Background} alt="" width="500" height="700" quality="50" />
                        </div>

                  </div>
            </Modal>
      )
}