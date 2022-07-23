import { PlusCircle } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

import styles from './CreateButton.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
}

const CreateButton = ({ text = "Criar", ...rest}: ButtonProps) => {
  return (
    <button type="button" {...rest} className={styles.container}>
      {text}
      <PlusCircle size={16} />
    </button>
  )
}

export { CreateButton }
