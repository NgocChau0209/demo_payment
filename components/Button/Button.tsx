import styles from './Button.module.scss';
import classnames from "classnames"
interface ButtonProps {
      text: string,
      onClickEvent: () => void,
      idElm?: string
      styleProps?: {}
}


export default function Button({ text, onClickEvent, idElm, styleProps }: ButtonProps) {
      function handleSubmit() {
            onClickEvent();
      }
      return (
            <div className={classnames(styles.button, "title-16")} style={styleProps} onClick={(e) => handleSubmit(e)} value={text} id={idElm}></div>
      )
}