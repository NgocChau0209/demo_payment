import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUserInfoRedux } from 'module/redux';
import { clearItemLocalStorage } from 'module/storage';
import { checkLoginAction } from "controller/redux/action/user";

const Logout = () => {
      const router = useRouter();
      const dispatch = useDispatch();


      useEffect(() => {
            function handleLogout() {
                  clearItemLocalStorage('token');
                  setUserInfoRedux({})
                  dispatch(checkLoginAction(false));
                  router.push('/account/login');
            }
            handleLogout();
      }, [])
      return (<></>)
}
export default Logout;
