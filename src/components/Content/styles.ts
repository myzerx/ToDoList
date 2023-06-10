import styled from 'styled-components'

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  margin-top: 5.625rem;
  padding: 0 1rem;
`

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
`

export const ContentTask = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const ContentTaskTextObj = {
  blue: 'blue',
  purple: 'purple',
} as const

interface ContextTextProps {
  color: keyof typeof ContentTaskTextObj
}

export const ContentTaskText = styled.p<ContextTextProps>`
  font-size: 0.875rem;
  font-weight: 700;

  color: ${(props) => props.theme[ContentTaskTextObj[props.color]]};
`

export const ContentTaskNumber = styled.span`
  width: 1.5625rem;
  height: 1.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.875rem;
  font-size: 0.75rem;
  font-weight: 700;

  background: ${(props) => props.theme['gray-400']};
`

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
