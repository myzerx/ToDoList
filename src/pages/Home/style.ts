import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.3rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const FlexInput = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;

    padding-left: 2rem;
  }
`

export const InputAddNewTask = styled.input`
  width: 39.875rem;
  height: 3.375rem;

  border-radius: 8px;
  border: 1.5px solid ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['gray-500']};

  padding-left: 1rem;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`

export const CreateTaskButton = styled.button`
  width: 5.625rem;
  height: 3.375rem;

  padding: 0.6rem;
  border-radius: 0.5rem;
  border: none;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['blue-dark']};

  display: flex;

  align-items: center;
  justify-content: space-evenly;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 140%;

  &:hover {
    background-color: ${(props) => props.theme.blue};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
  }
`
