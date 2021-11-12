import { sidebarList } from "./data";
import { useRouter } from 'next/router';
import styles from "./Sidebar.module.scss";
import classes from "classnames";

export default function Sidebar(){
    const router = useRouter()
    function goToNextPage(url){
        router.push(url);
    }
    return(
        <>
            {sidebarList.map((item,index)=>{
                return(
                    <div className={styles.item} onClick={()=>goToNextPage(item.url)} key={index}>
                        <div className={classes(styles.icon,'tag-20')}>
                            {item.text}
                        </div>
                        <div className={styles.text}>
                            {item.icon}
                        </div>
                    </div>
                )
            })}
        </>
    )
}