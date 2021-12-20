import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { IRootState } from 'controller/redux/store/configureStore';


interface IRouterGuardProps {
      children: JSX.Element[] | JSX.Element,
}

const RouteGuard = ({ children }: IRouterGuardProps) => {
      const router = useRouter();
      const isLogin = useSelector((state: IRootState) => state?.user.isLogin);
      const location = router.pathname;
      
      // go to login when user doesn't login
      useEffect(() => {
            if (!isLogin && !['/account/login',  '/account/signup'].includes(location)) {
                  router.push('/account/login');
            }
      }, []);

      // when user logged in and go to login/sign up page , automatically direct to home page
      useEffect(() => {
            if (isLogin && ['/account/login',  '/account/signup'].includes(location)) {
                  router.push('/');
            }
      }, []);

      return (children);
}
export default RouteGuard;