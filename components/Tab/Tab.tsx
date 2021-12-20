import styles from './Tab.module.scss';

interface Tab {
    text: string,
    icon: string
}
export default function Tab({ text, icon }: Tab) {
    return (
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