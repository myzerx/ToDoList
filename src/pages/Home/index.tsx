import { PlusCircle } from 'phosphor-react'

import {
  CreateTaskButton,
  FlexInput,
  HomeContainer,
  InputAddNewTask,
} from './style'

export function Home() {
  return (
    <HomeContainer>
      <FlexInput>
        <InputAddNewTask type="text" placeholder="Adicione uma nova tarefa" />
        <CreateTaskButton type="submit">
          Criar
          <PlusCircle size={18} weight={'bold'} />
        </CreateTaskButton>
      </FlexInput>
    </HomeContainer>
  )
}
