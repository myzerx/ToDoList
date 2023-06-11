import {
  ContentContainer,
  ContentHeader,
  ContentTask,
  ContentTaskNumber,
  ContentTaskRelative,
  ContentTaskText,
  NoTasks,
  NoTasksImage,
  NoTasksText,
} from './styles'

import clipboard from '../../assets/clipboard.svg'
import { useContext } from 'react'
import { TasksContext } from '../../pages/Home'
import { TaskComponent } from '../Tasks'

export function Content() {
  const { tasks, DeleteTasks } = useContext(TasksContext)
  const IsMoreThanOneTask = tasks.length > 0

  return (
    <ContentContainer>
      <ContentHeader>
        <ContentTask>
          <ContentTaskText color={'blue'}> Tarefas criadas </ContentTaskText>
          <ContentTaskNumber>{tasks.length} </ContentTaskNumber>
        </ContentTask>

        <ContentTask>
          <ContentTaskText color={'purple'}> Concluidas </ContentTaskText>
          {IsMoreThanOneTask ? (
            <ContentTaskNumber IsConcluded={'yes'}>
              0 de {tasks.length}
            </ContentTaskNumber>
          ) : (
            <ContentTaskNumber> 0 </ContentTaskNumber>
          )}
        </ContentTask>
      </ContentHeader>
      {IsMoreThanOneTask ? (
        <ContentTaskRelative>
          {tasks.map((task) => {
            return (
              <TaskComponent data={task} key={task.id} onDelete={DeleteTasks} />
            )
          })}
        </ContentTaskRelative>
      ) : (
        <NoTasks>
          <NoTasksImage>
            <img src={clipboard} alt="" />
          </NoTasksImage>
          <NoTasksText>
            <b>Você ainda não tem tarefas cadastradas </b>
          </NoTasksText>
          <NoTasksText>Crie tarefas e organize seus itens a fazer</NoTasksText>
        </NoTasks>
      )}
    </ContentContainer>
  )
}
