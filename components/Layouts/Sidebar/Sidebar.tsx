import { useRef } from 'react';
import { sidebarList } from './data';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { setExtendSidebar } from "controller/redux/action/layout";
import classnames from "classnames";
import styles from './Sidebar.module.scss';

export default function Sidebar() {
    const router = useRouter();
    const dispatch = useDispatch();
    const isExtendSidebar = useSelector(state => state.layout.isExtendSidebar) || false;
    /* ref to element */
    const sidebarRef = useRef(null);
    const closeBtnRef = useRef(null);

    /* handle extend sidebar */
    function expandSidebar() {
        let sidebar = sidebarRef.current;
        let closeBtn = closeBtnRef.current;
        if (!sidebar || !closeBtn) return;
        sidebar.classList.toggle("open");
        /* retrict or extend menu bar */
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
        /* change global state */
        dispatch(setExtendSidebar());
    }

    function goToNextPage(url: string) {
        router.push(url);
    }


    return (
        <div className={classnames(styles.sidebar, isExtendSidebar ? styles.open : "")} ref={sidebarRef}>
            <div className={styles.logo_details}>
                {isExtendSidebar ? <i className={classnames('bx', 'bxl-c-plus-plus', 'icon')}></i> : ""}
                {isExtendSidebar ? <div className={classnames(styles.logo_name, "title-18")}>CodingLab</div> : ""}
                <i className={classnames('bx', 'bx-menu')} id={styles.btn} ref={closeBtnRef} onClick={expandSidebar}></i>
            </div>
            <ul className={styles.nav_list}>
                {sidebarList.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={styles.links} onClick={() => goToNextPage(item.url)}>
                                <i className={classnames('bx', item.icon)}></i>
                                <span className={styles.links_name}>{item.text}</span>
                            </a>
                            <span className={classnames(styles.tooltip, "text-14")}>{item.text}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

