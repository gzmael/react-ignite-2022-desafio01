import { InputHTMLAttributes } from "react"
import styles from "./Checkbox.module.css"

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({ type = "checkbox", ...rest }: CheckboxProps) => {
  return (
    <input type={type} {...rest} className={styles.container} />
  )
}

export { Checkbox }
