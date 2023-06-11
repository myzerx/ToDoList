import { Task } from '../../pages/Home'
import {
  TaskContainer,
  TaskTile,
  CheckTaskButton,
  CheckTaskButtonDiv,
  TaskTileText,
  DeleteButton,
} from './styles'

import { Trash } from 'phosphor-react'

interface TypeProps {
  data: Task
  onDelete: (taskToDelete: string) => void
}

export function TaskComponent({ data, onDelete }: TypeProps) {
  function handleDeleteTask() {
    onDelete(data.id)
  }

  return (
    <TaskContainer>
      <TaskTile>
        <CheckTaskButton>
          <CheckTaskButtonDiv />
        </CheckTaskButton>
        <TaskTileText> {data.title} </TaskTileText>
        <DeleteButton onClick={handleDeleteTask}>
          <Trash size={18} />
        </DeleteButton>
      </TaskTile>
    </TaskContainer>
  )
}
