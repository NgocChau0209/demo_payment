import { sidebarList } from "./data";
import { useRouter } from 'next/router';
import styles from "./Section.module.scss";
import classes from "classnames";

export default function Section({children}){
   
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}