import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss"
export default function Layout({children}){
    return(
        <div className={styles.container}>
            <div className={styles.sidebar}> 
                <Sidebar/>      
            </div>
            <div className={styles.content}> 
                {children}  
            </div>
        </div>
        
    )
}