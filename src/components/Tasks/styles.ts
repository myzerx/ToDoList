import styled from 'styled-components'

export const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vh;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.35rem 0;

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    max-width: 100%;
  }
`

export const TaskTile = styled.div`
  display: flex;
  height: 5rem;
  width: 100%;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 0.7rem;
  background-color: ${(props) => props.theme['gray-500']};
  align-items: baseline;
  justify-content: space-between;

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0.5rem;
  }
`

export const CheckTaskButton = styled.div`
  border: none;
  background: none;
  min-width: 1.125rem;
  height: 1.125rem;
  position: relative;
  top: 5px;
`

export const CheckTaskButtonDiv = styled.input`
  appearance: none;
  height: 100%;
  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 50%;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme['blue-dark']};
    cursor: pointer;
  }

  &:checked {
    border: 2px solid ${(props) => props.theme['purple-dark']};
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.43059 0.342123L4.09865 4.67406L1.61618 2.19159L0.780273 3.0275L4.09865 6.34587L9.26649 1.17803L8.43059 0.342123Z' fill='%23F2F2F2'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme['purple-dark']};

    &:hover {
      border: 2px solid ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme.purple};
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    width: 6%;
  }
`

interface TaskTileTextisUnderlineProps {
  isUnderlined: boolean
}

export const TaskTileText = styled.span<TaskTileTextisUnderlineProps>`
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 140%;
  padding: 0 0.5rem;
  width: 100%;
  text-align: left;
  text-decoration: ${(props) => (props.isUnderlined ? 'line-through' : 'none')};
  color: ${(props) =>
    props.isUnderlined ? props.theme['gray-300'] : props.theme['gray-100']};

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    font-size: 12px;
  }
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
