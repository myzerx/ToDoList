import { Task } from '../../pages/Home'
import {
  TaskContainer,
  TaskTile,
  CheckTaskButton,
  CheckTaskButtonDiv,
  TaskTileText,
  DeleteButton,
} from './styles'

import { Trash } from '@phosphor-icons/react'

interface TypeProps {
  data: Task
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function TaskComponent({ data, onDelete, onComplete }: TypeProps) {
  function handleDeleteTask() {
    onDelete(data.id)
  }

  function handleCompleteTask() {
    onComplete(data.id)
  }

  return (
    <TaskContainer>
      <TaskTile>
        <CheckTaskButton>
          <CheckTaskButtonDiv
            type="checkbox"
            onChange={handleCompleteTask}
            checked={data.isFinished}
          />
        </CheckTaskButton>
        <TaskTileText isUnderlined={!!data.isFinished}>
          {data.title}
        </TaskTileText>
        <DeleteButton onClick={handleDeleteTask}>
          <Trash size={18} />
        </DeleteButton>
      </TaskTile>
    </TaskContainer>
  )
}
