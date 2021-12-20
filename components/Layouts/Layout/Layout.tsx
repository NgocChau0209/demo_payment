
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from 'controller/redux/action/layout';
import { IRootState } from 'controller/redux/store/configureStore';
import styles from "./Layout.module.scss";
import Loading from 'components/Loading/Loading';
import Sidebar from "components/Layouts/Sidebar/Sidebar";
import classesnames from "classnames";


interface LayoutProps {
    children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const location = router.pathname;
    const isLogin = useSelector((state: IRootState) => state?.user.isLogin);
    const isLoading = useSelector((state: IRootState) => state?.layout.isLoading);
    const isExtendSidebar = useSelector((state: IRootState) => state.layout.isExtendSidebar) || false;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(false));
    }, [])

    return (
        <div className={styles.container}>
            {(isLogin || (!['/account/login',  '/account/signup'].includes(location))) &&
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
            }
            <Loading isLoading={isLoading}>
                <div className={classesnames(styles.content,isExtendSidebar ? styles.restrict : "")}>
                    {children}
                </div>
            </Loading>
        </div>
    )
}