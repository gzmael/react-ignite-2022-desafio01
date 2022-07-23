import { useEffect, useState } from 'react'
import { Task } from '../../../interfaces/task'
import { Checkbox } from '../../atoms/Checkbox'
import { DeleteButton } from '../../atoms/DeleteButton'

import styles from './Task.module.css'

interface TaskProps {
  task: Task
  removeTask: (id: string) => void
  toggleTask: (id: string, status: boolean) => void
}

const TaskItem = ({ task, removeTask, toggleTask }: TaskProps) => {
  const [state, setState] = useState(task.checked)
  
  const handleToogleTask = (newStatus: boolean) => {
    toggleTask(task.id, newStatus);
    setState(newStatus);
  }
  
  const handleDeleteTask = () => {
    removeTask(task.id);
  }

  return (
    <li className={styles.container}>
      <Checkbox onChange={(e) => handleToogleTask(e.target.checked)} className={state ? styles.done : ''} />
      <p className={state ? styles.done : ''}>{task.text}</p>
      <DeleteButton onClick={() => handleDeleteTask()} />
    </li>
  )
}

export { TaskItem }
