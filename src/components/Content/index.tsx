import { Trash } from 'phosphor-react'

import {
  ContentContainer,
  ContentHeader,
  ContentTask,
  ContentTaskNumber,
  ContentTaskText,
  TaskContainer,
  TaskTile,
  CheckTaskButton,
  CheckTaskButtonDiv,
  TaskTileText,
  DeleteButton,
} from './styles'

export function Content() {
  return (
    <ContentContainer>
      <ContentHeader>
        <ContentTask>
          <ContentTaskText color={'blue'}> Tarefas criadas</ContentTaskText>
          <ContentTaskNumber> 0 </ContentTaskNumber>
        </ContentTask>

        <ContentTask>
          <ContentTaskText color={'purple'}> Concluidas</ContentTaskText>
          <ContentTaskNumber> 0 </ContentTaskNumber>
        </ContentTask>
      </ContentHeader>
      <TaskContainer>
        <TaskTile>
          <CheckTaskButton>
            <CheckTaskButtonDiv />
          </CheckTaskButton>
          <TaskTileText>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </TaskTileText>
          <DeleteButton>
            <Trash size={16} />
          </DeleteButton>
        </TaskTile>
      </TaskContainer>
    </ContentContainer>
  )
}
