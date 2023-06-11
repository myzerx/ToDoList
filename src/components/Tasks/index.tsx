import {
  TaskContainer,
  TaskTile,
  CheckTaskButton,
  CheckTaskButtonDiv,
  TaskTileText,
  DeleteButton,
} from './styles'

import { Trash } from 'phosphor-react'

interface TaskType {
  tasks: string
}

export function TaskComponent({ tasks }: TaskType) {
  return (
    <TaskContainer>
      <TaskTile>
        <CheckTaskButton>
          <CheckTaskButtonDiv />
        </CheckTaskButton>
        <TaskTileText> {tasks} </TaskTileText>
        <DeleteButton>
          <Trash size={18} />
        </DeleteButton>
      </TaskTile>
    </TaskContainer>
  )
}
