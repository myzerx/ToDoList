import styled from 'styled-components'

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem 0;
`
export const TaskTile = styled.div`
  display: flex;
  height: 5rem;

  padding: 1rem;
  gap: 0.75rem;
  border-radius: 0.7rem;
  background-color: ${(props) => props.theme['gray-500']};
  align-items: baseline;
  justify-content: space-between;
`

export const CheckTaskButton = styled.button`
  border: none;
  background: none;
  min-width: 1.125rem;
  height: 1.125rem;
  position: relative;
  top: 5px;
`
export const CheckTaskButtonDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 50%;
`

export const TaskTileText = styled.span`
  display: flex;
  font-size: 14px;
  line-height: 140%;
  padding: 0 0.5rem;
  width: 100%;
  text-align: left;
`
export const DeleteButton = styled.div`
  padding: 5px;
  top: 4px;
  color: ${(props) => props.theme['gray-300']};
  position: relative;

  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.danger};
    background: ${(props) => props.theme['gray-400']};

    cursor: pointer;
  }
`
