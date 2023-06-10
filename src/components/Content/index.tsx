import {
  ContentContainer,
  ContentHeader,
  ContentTask,
  ContentTaskNumber,
  ContentTaskText,
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
    </ContentContainer>
  )
}
