import { Trash } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

import styles from './DeleteButton.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const DeleteButton = (props: ButtonProps) => {
  return (
    <button type="button" {...props} className={styles.container}>
      <Trash size={16} />
    </button>
  )
}

export { DeleteButton }
