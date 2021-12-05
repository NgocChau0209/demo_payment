import styles from './Button.module.scss';

export const Button= ({text,onClickEvent,idElm})=>{
      function handleOnClick(){
            onClickEvent();
      }
      return(
            <>
            <div className={styles.container} onClick={handleOnClick} id={idElm}>{text}</div>
            </>
      )
}