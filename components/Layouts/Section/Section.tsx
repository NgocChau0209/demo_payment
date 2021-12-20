import styles from "./Section.module.scss";
import classnames from "classnames"

interface SectionProps {
    children?: React.ReactNode,
    styleProps?: any,
    header?: string
}

export default function Section({ children, styleProps, header }: SectionProps) {

    return (
        <div className={styles.section} style={styleProps?.container}>
            <div className={styles.header} style={styleProps?.header}>
                <p className="title-24">{header}</p>
            </div>
            <div className={styles.content} style={styleProps?.content}>
                {children}
            </div>
        </div >
    )
}