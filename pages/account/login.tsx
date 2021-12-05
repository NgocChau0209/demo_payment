import { useState } from "react";
import { useRouter } from "next/router";
import { IUser } from '../../interface/User';
import { userAPI } from "../../services/user";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput";
import { checkLoginAction } from "../../controller/redux/action/user";
import { setUserInfoRedux } from "../../module/redux";
import { validatePhoneNumber } from "../../module/validate";
import { useDispatch } from "react-redux";

export default function Login() {
      const [signupData, setSignupData] = useState<IUser>({ email: '', phoneNumber: '', name: '', identify: '', password: '', rePassword: '' });
      // format error : {[field]: message}
      const [error, setError] = useState({})
      const router = useRouter();
      // const [state, dispatch] = useReducer(userReducer);

      const dispatch = useDispatch();
      async function handleSubmit() {
            let { password, phoneNumber } = signupData;
            if (!phoneNumber) {
                  setError({ ...error, phoneNumber: 'Vui lòng nhập số điện thoại' })
            }
            else {
                  deleteError("phoneNumber");
                  let isPhoneNumberFormat = validatePhoneNumber(phoneNumber);
                  if (!isPhoneNumberFormat) setError({ ...error, "phoneNumber": 'Số điện thoại không hợp lệ' })
            }
            if (!password) {
                  setError({ ...error, password: 'Vui lòng nhập mật khẩu' })
            }
            else {
                  deleteError("password");
            }

            if (!Object.keys(error).length) {
                  console.log('send api')
                  let userInfo = await userAPI.login(signupData)
                  if (userInfo && Object.keys(userInfo).length) {
                        setUserInfoRedux(userInfo);
                        dispatch(checkLoginAction(true));
                        router.push('/');
                  }
                  else {
                        console.log('login fail')
                  }
            }

      }

      function deleteError(field: string) {
            if (error.hasOwnProperty(field)) delete error.field;
      }

      async function getText(detail: any) {
            let { field, value } = detail;
            setSignupData({ ...signupData, [field]: value })
      }

      return (
            <>
                  <Title text="Đăng nhập" />
                  <TextInput label="Số điện thoại" name="phoneNumber" getInfo={getText} />
                  <TextInput label="Mật khẩu" name="password" inputType="password" getInfo={getText} />

                  <Button text="Đăng nhập" onClickEvent={handleSubmit} />
            </>
      )
}