import { PlusCircle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CreateTaskButton,
  FlexInput,
  HomeContainer,
  InputAddNewTask,
} from './style'
import { Content } from '../../components/Content'
import { createContext, useState } from 'react'

const newTaskFormValidationSchema = zod.object({
  title: zod.string().min(1, 'Informe a tarefa'),
})

type newTaskFormData = zod.infer<typeof newTaskFormValidationSchema>

export interface Task {
  id: string
  title: string
}

export interface TasksContextType {
  tasks: Task[]
  DeleteTasks: (taskToDelete: string) => void
}

export const TasksContext = createContext({} as TasksContextType)

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      title: '',
    },
  })

  function handleCreateNewTask(data: newTaskFormData) {
    const newTask: Task = {
      id: String(new Date().getTime()),
      title: data.title,
    }
    setTasks([...tasks, newTask])

    console.log(newTask.id)
    reset()
  }

  function DeleteTasks(taskToDelete: string) {
    const tasksWithoutDeletedOne: Task[] = tasks.filter(
      (task) => task.id !== taskToDelete,
    )
    setTasks(tasksWithoutDeletedOne)
    console.log(tasksWithoutDeletedOne)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <TasksContext.Provider value={{ tasks, DeleteTasks }}>
          <FlexInput>
            <InputAddNewTask
              id="task"
              type="text"
              placeholder="Adicione uma nova tarefa"
              {...register('title')}
            />
            <CreateTaskButton type="submit">
              Criar
              <PlusCircle size={20} />
            </CreateTaskButton>
          </FlexInput>
          <Content />
        </TasksContext.Provider>
      </form>
    </HomeContainer>
  )
}
