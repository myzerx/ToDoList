import { PlusCircle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CreateTaskButton,
  FlexInput,
  HomeContainer,
  InputAddNewTask,
} from './style'
import { Content } from '../../components/Content'

export function Home() {
  const { register, handleSubmit } = useForm()

  function handleCreateNewTask(data: any) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <FlexInput>
          <InputAddNewTask
            id="task"
            type="text"
            placeholder="Adicione uma nova tarefa"
            {...register('task')}
          />
          <CreateTaskButton type="submit">
            Criar
            <PlusCircle size={20} />
          </CreateTaskButton>
        </FlexInput>
      </form>
      <Content />
    </HomeContainer>
  )
}
