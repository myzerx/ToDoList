import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <div>
        <input type="text" placeholder="Adicione uma tarefa" />
        <button type="submit"> Criar </button>
      </div>
    </HomeContainer>
  )
}
