# Adivinhe a Palavra

Este é um jogo simples de adivinhação de palavras desenvolvido com React e TypeScript. O objetivo do jogo é adivinhar uma palavra secreta com base em uma dica, dentro de um limite de tentativas.

## Tecnologias Utilizadas

*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.
*   **Vite:** Ferramenta de build frontend que oferece uma experiência de desenvolvimento extremamente rápida.

## Padrões de Projeto e Boas Práticas

O projeto foi desenvolvido com foco em:

*   **Componentização:** A interface é dividida em componentes reutilizáveis, facilitando a manutenção e escalabilidade.
*   **Estado Gerenciado:** Utilização de `useState` do React para gerenciar o estado da aplicação de forma eficiente.
*   **Código Limpo e Legível:** Priorização de um código claro, conciso e bem estruturado.

## Setup e Configuração

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/MSixels/Adivinhe.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Adivinhe
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn dev
    ```

O jogo estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## Como Jogar

1.  O jogo irá apresentar uma dica para a palavra secreta.
2.  Insira seu palpite no campo de texto.
3.  Clique em "Adivinhar" para verificar se seu palpite está correto.
4.  O jogo informará se você acertou ou não, e o número de tentativas restantes.
5.  Continue adivinhando até acertar a palavra ou esgotar as tentativas.

Divirta-se!


