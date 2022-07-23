import { useState } from 'react'
import { CreateButton } from '../../atoms/CreateButton'
import { Input } from '../../atoms/Input'
import styles from './Form.module.css'

interface FormProps {
  addTask: (content: string) => void
}

const Form = ({ addTask }: FormProps) => {
  const [task, setTask] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  }

  function handleNewTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity('');
    const task = e.target.value;
    setTask(task);
  }

  function handleNewTaskInvalid(e: React.FormEvent<HTMLInputElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewTaskEmpty = task.length === 0;

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input 
          placeholder="Adicione uma nova tarefa" 
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          value={task}
        />
        <CreateButton type='submit' text='Criar' disabled={isNewTaskEmpty} />
      </form>
    </div>
  )
}

export { Form }
