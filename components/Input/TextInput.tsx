// @import
import styles from './TextInput.module.scss';
import classnames from "classnames";

interface TextInputProps {
      stylesProps?: {},
      label?: string,
      name?: string,
      error?: any,
      inputType?: string,
      value?: any,
      isDisabled?: boolean
      getInfo?: ({ }) => void,
      pattern?: any,
      inputmode?: string,
      maxlength?: number
}
export default function TextInput({ label, name, getInfo, error, inputType, value, isDisabled = false, stylesProps = { container: {}, label: {}, input: {} }, pattern, inputmode, maxlength }: TextInputProps) {
      function handleChange(event: any) {
            getInfo && getInfo({ field: event.target.name, value: event.target.value })
      }

      return (
            <div className={styles.input_box} style={stylesProps?.container}>
                  <span className={styles.details} style={stylesProps?.label}>{label}</span>
                  <input type={inputType} name={name} pattern={pattern} id={name} inputMode={inputmode} disabled={isDisabled} className={classnames(styles.input, "text-16")} style={stylesProps?.input} onChange={handleChange} value={value} maxLength={maxlength} />
                  <p className={styles.error}>{error || ""}</p>
            </div>
      )
}