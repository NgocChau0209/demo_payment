import styles from "./Section.module.scss";
import { formartInlineStyle } from '../../../module/common';

export default function Section({ children, styleProps }) {

    return (
        <div className={styles.container} style={styleProps}>
            {children}
        </div >
    )
}