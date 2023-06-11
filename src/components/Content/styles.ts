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
