import { nanoid } from 'nanoid'
import { Header } from './components/molecules/Header'
import './styles/global.css'
import styles from './App.module.css'
import { Form } from './components/organisms/Form'
import { useState } from 'react'
import { Task } from './interfaces/task'
import { Todos } from './components/organisms/Todos'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask = (task: string) => {
    setTasks(prev => [
      ...prev,
      {
        checked: false,
        id: nanoid(),
        text: task,
      }
    ])
  }

  const handleRemoveTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const handleToggleTask = (id: string, status: boolean) => {
    
    
    setTasks(() => {
      const indexTask = tasks.findIndex(task => task.id === id)
      tasks[indexTask].checked = status;
      console.log(`achou o index ${indexTask} e setou como ${status}`);
      
      return tasks
    })
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <Form addTask={handleAddTask} />
      <Todos
        todos={tasks}
        removeTask={handleRemoveTask}
        toogleTask={handleToggleTask}
      />
    </div>
  )
}

export default App
