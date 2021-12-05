import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { IRootState } from '../../controller/redux/store/configureStore';

interface IRouterGuardProps {
      children: JSX.Element[] | JSX.Element
}

const RouteGuard = ({ children }: IRouterGuardProps) => {
      const router = useRouter();
      let isLogin = useSelector((state: IRootState) => state.user.isLogin);
      console.log(isLogin)
      useEffect(() => {
            if (!isLogin) {
                  router.push('/account/login');
            }
      }, [])
      return (children);

}
export default RouteGuard;