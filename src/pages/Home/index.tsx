import { PlusCircle } from '@phosphor-icons/react'
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
  isFinished: zod.boolean(),
})

type newTaskFormData = zod.infer<typeof newTaskFormValidationSchema>

export interface Task {
  id: string
  title: string
  isFinished: boolean
}

export interface TasksContextType {
  tasks: Task[]
  DeleteTasks: (taskId: string) => void
  completeTasks: (taskId: string) => void
}

export const TasksContext = createContext({} as TasksContextType)

export function Home() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('@ignite-todo:tasks-state-1.0.0')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      title: '',
      isFinished: false,
    },
  })

  const setTasksAndSave = (newTasks: Task[]) => {
    setTasks(newTasks)
    localStorage.setItem(
      '@ignite-todo:tasks-state-1.0.0',
      JSON.stringify(newTasks),
    )
  }

  const handleCreateNewTask = (data: newTaskFormData) => {
    const newTask: Task = {
      id: String(new Date().getTime()),
      title: data.title,
      isFinished: data.isFinished,
    }
    const updatedTasks = [...tasks, newTask]
    setTasksAndSave(updatedTasks)
    reset()
  }

  const DeleteTasks = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasksAndSave(updatedTasks)
  }

  const completeTasks = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isFinished: !task.isFinished,
        }
      }
      return task
    })
    setTasksAndSave(updatedTasks)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <TasksContext.Provider value={{ tasks, DeleteTasks, completeTasks }}>
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
