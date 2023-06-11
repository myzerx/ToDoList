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

interface Task {
  id: string
  title: string
}

export interface TasksContextType {
  tasks: Task[]
  activeTask: Task | undefined
}

export const TasksContext = createContext({} as TasksContextType)

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null)

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
    setActiveTaskId(newTask.id)
    reset()
  }

  const activeTask = tasks.find((task) => task.id === activeTaskId)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <TasksContext.Provider value={{ tasks, activeTask }}>
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
