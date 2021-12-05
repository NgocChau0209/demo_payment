import { useState } from "react";
import { useRouter } from "next/router";
import { IUser } from '../../interface/User';
import { userAPI } from "../../services/user";
import { Button } from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput";
import { validateEmail, validateMatchString, validatePhoneNumber } from "../../module/validate";

export default function SignUp() {
      const [signupData, setSignupData] = useState<IUser>({ phoneNumber: '', userName: '', identify: '', password: '' });
      // format error : {[field]: message}
      const router = useRouter();
      const [error, setError] = useState({});
      async function handleSubmit() {
            if (!timeoutSearchPhone) {
                  let { password, phoneNumber, userName } = signupData;
                  if (!phoneNumber) {
                        setError({ ...error, phoneNumber: 'Vui lòng nhập số điện thoại' })
                  }
                  else {
                        deleteError("phoneNumber");
                        let isPhoneNumberFormat = validatePhoneNumber(phoneNumber);
                        if (!isPhoneNumberFormat) setError({ ...error, "phoneNumber": 'Số điện thoại không hợp lệ' })
                  }
                  if (!userName) {
                        setError({ ...error, password: 'Vui lòng nhập họ tên' })
                  }
                  else {
                        deleteError("userName");
                  }
                  if (!password) {
                        setError({ ...error, password: 'Vui lòng nhập mật khẩu' })
                  }
                  else {
                        deleteError("password");
                  }
                  if (!Object.keys(error).length) {
                        let isSuccess = await userAPI.signUp(signupData);
                        if(isSuccess){
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
                        let resPhoneNumber = await userAPI.checkPhoneNumber(value);
                        console.log(resPhoneNumber)
                        if (resPhoneNumber && Object.keys(resPhoneNumber).length) {
                              setError({ ...error, "phoneNumber": 'Số điện thoại này đã được sử dụng' })
                              return;
                        }
                  }, 1000);
            }
            setSignupData({ ...signupData, [field]: value })
      }

      return (
            <>
                  <TextInput label="Số điện thoại" name="phoneNumber" getInfo={getText} error={error.phoneNumber} />
                  <TextInput label="Họ tên" name="userName" getInfo={getText} error={error.userName} />
                  <TextInput label="Mật khẩu" name="password" inputType="password" getInfo={getText} error={error.password} />
                  <Button text="Đăng kí" onClickEvent={handleSubmit} />
            </>
      )
}