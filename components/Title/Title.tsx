import styles from "./Title.module.scss";
interface TitleProps {
      text: string
}
export default function Title({ text }: TitleProps) {
      return (
            <p className={styles.container}>{text}</p>
      )
}