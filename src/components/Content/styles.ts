import styled from 'styled-components'

export const ContentContainer = styled.div`
  max-width: 736px;
  width: 100%;

  margin: 0 auto;
  margin-top: 3.425rem;
`

export const ContentHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    width: 400px;
    padding: 2rem;
  }
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

interface ContentTextProps {
  color: keyof typeof ContentTaskTextObj
}

export const ContentTaskText = styled.p<ContentTextProps>`
  font-size: 0.875rem;
  font-weight: 700;

  color: ${(props) => props.theme[ContentTaskTextObj[props.color]]};
`

const ContentTaskNumberObj = {
  yes: true,
  no: false,
} as const
interface ContentTaskNumberProps {
  IsConcluded?: keyof typeof ContentTaskNumberObj
}

export const ContentTaskNumber = styled.span<ContentTaskNumberProps>`
  min-width: ${(props) =>
    props.IsConcluded === 'yes' ? '3.5rem' : '1.5625rem'};
  max-width: 3.5rem;
  height: 1.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.875rem;
  font-size: 0.75rem;
  font-weight: 700;

  background: ${(props) => props.theme['gray-400']};

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    min-width: ${(props) =>
      props.IsConcluded === 'yes' ? '3.5rem' : '1.5625rem'};
    max-width: 1.5625rem;
    @media (max-width: 768px) {
      /* Styles for screens up to 768px wide */
    }
    width: 100%;
  }
`

export const ContentTaskRelative = styled.div`
  margin-top: 1.125rem;
  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */

    margin-top: -0.5rem;
    padding: 10px;
  }
`

export const NoTasks = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.5rem;

  margin-top: 1.5rem;
  border-radius: 8px;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */

    margin-top: -0.5rem;
  }
`

export const NoTasksImage = styled.div`
  display: flex;
  padding: 1rem;
`

export const NoTasksText = styled.span`
  color: ${(props) => props.theme['gray-300']};
  display: block;

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    font-size: 13px;
    display: flex;
    justify-content: center;
    width: 255px;
  }
`
