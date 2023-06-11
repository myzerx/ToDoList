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
  const { tasks, DeleteTasks, completeTasks } = useContext(TasksContext)
  const tasksQuantity = tasks.length
  const IsMoreThanOneTask = tasksQuantity > 0
  const completedTasks = tasks.filter((task) => task.isFinished).length

  return (
    <ContentContainer>
      <ContentHeader>
        <ContentTask>
          <ContentTaskText color={'blue'}> Tarefas criadas </ContentTaskText>
          <ContentTaskNumber>{tasksQuantity} </ContentTaskNumber>
        </ContentTask>
        <ContentTask>
          {}
          <ContentTaskText color={'purple'}> Concluidas </ContentTaskText>
          {IsMoreThanOneTask ? (
            <ContentTaskNumber IsConcluded={'yes'}>
              {completedTasks} de {tasksQuantity}
            </ContentTaskNumber>
          ) : (
            <ContentTaskNumber> {completedTasks} </ContentTaskNumber>
          )}
        </ContentTask>
      </ContentHeader>
      {IsMoreThanOneTask ? (
        <ContentTaskRelative>
          {tasks.map((task) => {
            return (
              <TaskComponent
                data={task}
                key={task.id}
                onDelete={DeleteTasks}
                onComplete={completeTasks}
              />
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
