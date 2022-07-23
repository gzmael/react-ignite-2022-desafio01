import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({ type = "text", ...rest }: InputProps) => {
  return (
    <input 
      type={type}
      className={styles.container}
      {...rest}
    />
  )
}

export { Input }
