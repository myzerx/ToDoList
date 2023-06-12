# To Do List

No desafio técnico da Rocketseat, o objetivo era desenvolver um aplicativo de lista de tarefas utilizando React.js. O propósito do desafio envolvia a implementação das seguintes funcionalidades:

- Adicionar uma nova tarefa: Os usuários deveriam ter a capacidade de adicionar novas tarefas à lista, fornecendo uma descrição para cada uma delas.

- Marcar e desmarcar uma tarefa como concluída: Seria possível marcar uma tarefa como concluída, indicando visualmente o seu status. Os usuários também teriam a opção de desmarcar uma tarefa previamente concluída, caso necessário.

- Remover uma tarefa da listagem: Os usuários teriam a opção de remover tarefas da lista, caso não fossem mais relevantes ou necessárias.

- Mostrar o progresso de conclusão das tarefas: O aplicativo deveria exibir o progresso de conclusão das tarefas, fornecendo informações sobre o número total de tarefas e quantas delas foram concluídas. Essa contagem permitiria aos usuários acompanhar o seu progresso e ter uma visão geral do que foi realizado.

Para iniciar o projeto, foi utilizado o template gerado com o Vite, um poderoso gerador de projetos que proporciona uma configuração inicial pronta para uso. Com a base em Typescript, foi possível aproveitar os benefícios de um sistema de tipagem estática, aumentando a segurança e facilidade de manutenção do código.

Você também pode acessar meu projeto clicando [AQUI](https://to-do-list-myzerx.vercel.app/)



<h1 id='tech'>Tecnologias</h1>

- React JS
- Typescript
- Styled Components
- Hooks: useForm, useContext
- Zod (Validation Resolvers)
- Phosphor Icons (Lib de Ícones)
- Eslint


<h1 id='pre'>Pré requisitos </h1>

### Antes de rodar você precisar ter instalado na sua máquina as seguintes ferramentas:

1. Git
2. Node.js
3. pnpm

```bash
#Clone esse repositório
$ git clone https://github.com/myzerx/ToDoList.git

#Entre na pasta
$ cd ToDoList-Challenge01

#Instale as dependências 
$ pnpm i

#Execute a aplicação em modo de desenvolvimento
$ pnpm dev
#o servidor irá iniciar na porta 3000 - acesse http://localhost:3000

```
<h1 id='func'>Funcionalidades</h1>

O aplicativo de lista de tarefas oferece diversas funcionalidades para facilitar a organização das tarefas. A seguir, detalhamos cada uma delas:

Adicionar uma nova tarefa: Os usuários podem adicionar uma tarefa digitando uma descrição no campo de entrada e pressionando a tecla Enter ou clicando no botão "Criar". Essa funcionalidade permite a inclusão rápida e conveniente de novas tarefas na lista.

Restrição para criar uma nova tarefa: Para criar uma nova tarefa, é necessário começar a digitar no campo de entrada. Somente após iniciar a digitação é possível criar uma nova tarefa. Isso evita tarefas vazias e garante que o usuário forneça uma descrição adequada para cada tarefa.

Marcar uma tarefa como concluída: Para indicar que uma tarefa foi concluída, basta clicar na caixa de seleção ao lado dela. A tarefa será visualmente marcada como concluída, com um risco ou outra forma de destaque. Essa funcionalidade permite ao usuário acompanhar o progresso e identificar facilmente as tarefas já finalizadas.

Verificar o status das tarefas: A parte superior da lista exibe informações relevantes sobre as tarefas. É possível verificar quantas tarefas foram criadas e quantas delas foram concluídas. Essa contagem fornece uma visão geral do número de tarefas existentes e do progresso realizado.

Excluir uma tarefa: Cada tarefa exibida na lista é acompanhada por um botão com o símbolo de uma lixeira. Ao clicar nesse botão, é possível remover a tarefa da lista. Essa funcionalidade permite ao usuário excluir tarefas que não são mais necessárias ou relevantes.

Atualização persistente: Todas as ações realizadas no aplicativo são salvas no local storage do navegador, garantindo que as informações sejam mantidas mesmo após a atualização da página. Isso significa que as tarefas adicionadas, marcadas como concluídas ou excluídas permanecerão salvas e serão restauradas quando o usuário retornar ao aplicativo.

Essas funcionalidades fornecem aos usuários uma experiência intuitiva e prática para gerenciar suas tarefas de forma eficiente e acompanhar o progresso de suas atividades.


<h1 id='func'>Autor</h1>

Feito por Richard Lemos [LINKEDIN](https://www.linkedin.com/in/richardcassola/)
