import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: max;
  height: 12.5rem;
  margin: 0rem auto;
  padding: 5rem;

  background: ${(props) => props.theme['gray-700']};

  display: flex;
  flex-direction: column;
`
