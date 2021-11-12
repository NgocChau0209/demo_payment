import styles from './Tab.module.scss';

export default function Tab({text,icon}){
    return(
        <div className={styles.container}>
            <div className={styles.icon}>
                {text}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}