import {
  ContentContainer,
  ContentHeader,
  ContentTask,
  ContentTaskNumber,
  ContentTaskText,
} from './styles'
import { useContext } from 'react'
import { TasksContext } from '../../pages/Home'
import { TaskComponent } from '../Tasks'

export function Content() {
  const { tasks } = useContext(TasksContext)

  return (
    <ContentContainer>
      <ContentHeader>
        <ContentTask>
          <ContentTaskText color={'blue'}> Tarefas criadas</ContentTaskText>
          <ContentTaskNumber> {tasks.length} </ContentTaskNumber>
        </ContentTask>

        <ContentTask>
          <ContentTaskText color={'purple'}> Concluidas</ContentTaskText>
          <ContentTaskNumber> 0 </ContentTaskNumber>
        </ContentTask>
      </ContentHeader>
      {tasks.map((task) => {
        return <TaskComponent key={task.id} tasks={task.title} />
      })}
    </ContentContainer>
  )
}
