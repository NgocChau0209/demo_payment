// @import
import styles from './TextInput.module.scss';

interface TextInputProps {
      label: string,
      name: string,
      error: any,
      inputType: string,
      getInfo: () => {},
}
export default function TextInput({ label, name, getInfo, error, inputType, value, isDisabled = false }) {
      function handleChange(event: any) {
            getInfo({ field: event.target.name, value: event.target.value })
      }

      return (
            <div className={styles.container}>
                  <div className={styles.label}>{label}</div>
                  <input type={inputType} name={name} id={name} className={styles.input} onChange={handleChange} value={value} disabled={isDisabled}/>
            {error}
            </div>
      )
}