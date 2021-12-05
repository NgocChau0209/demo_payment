import styles from "./Title.module.scss";
export function Title({text}){
      return (
            <p className={styles.container}>{text}</p>
      )
}