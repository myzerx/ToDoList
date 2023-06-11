import {
  TaskContainer,
  TaskTile,
  CheckTaskButton,
  CheckTaskButtonDiv,
  TaskTileText,
  DeleteButton,
} from './styles'

import { Trash } from 'phosphor-react'

interface Props {
  tasks: string
}

export function TaskComponent({ tasks }: Props) {
  return (
    <TaskContainer>
      <TaskTile>
        <CheckTaskButton>
          <CheckTaskButtonDiv />
        </CheckTaskButton>
        <TaskTileText> {tasks} </TaskTileText>
        <DeleteButton>
          <Trash size={16} />
        </DeleteButton>
      </TaskTile>
    </TaskContainer>
  )
}
