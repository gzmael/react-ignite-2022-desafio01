import styles from './EmptyTasks.module.css'
import { Clipboard } from 'phosphor-react'

const EmptyTasks = () => {
  return (
    <div className={styles.container}>
      <Clipboard size={56} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}

export { EmptyTasks }
