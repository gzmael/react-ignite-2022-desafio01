import { useMemo } from 'react'
import { Task } from '../../../interfaces/task'
import { Badge } from '../../atoms/Badge'
import { EmptyTasks } from '../../molecules/EmptyTasks'
import { TaskItem } from '../../molecules/Task'

import styles from './Todos.module.css'

interface TodosProps {
  todos: Task[]
  toogleTask: (id: string, status: boolean) => void
  removeTask: (id: string) => void
}

const Todos = ({ removeTask, todos, toogleTask }: TodosProps) => {

  const completedText = useMemo(() => {
    const completed = todos.filter(task => task.checked)

    return {
      total: completed.length,
      text: todos.length > 0 
      ? `${completed.length} de ${todos.length}` 
      : `0`
    }
  }, [todos]);

  const handleToogleTask = (id: string, status: boolean) => {
    toogleTask(id, status);
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.criadas}>
          Tarefas criadas
          <Badge text={`${completedText.total}`} />
        </div>
        <div className={styles.concluidas}>
          Concluídas
          <Badge text={completedText.text} />
        </div>
      </header>
      {todos.length === 0 ? (
        <EmptyTasks />
      ) : (
        <ul>
          {todos.map(task => (
            <TaskItem 
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleTask={handleToogleTask}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export { Todos }
