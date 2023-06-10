import { PlusCircle } from 'phosphor-react'

import {
  CreateTaskButton,
  FlexInput,
  HomeContainer,
  InputAddNewTask,
} from './style'
import { Content } from '../../components/Content'

export function Home() {
  return (
    <HomeContainer>
      <FlexInput>
        <InputAddNewTask type="text" placeholder="Adicione uma nova tarefa" />
        <CreateTaskButton type="submit">
          Criar
          <PlusCircle size={20} />
        </CreateTaskButton>
      </FlexInput>
      <Content />
    </HomeContainer>
  )
}
