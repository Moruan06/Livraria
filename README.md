# 📚 Minha Biblioteca Virtual

Um projeto simples e elegante para catalogar livros. Permite adicionar, apagar e marcar livros como lidos, tudo numa interface dinâmica e agradável construída com HTML, CSS e JavaScript puro.


## ✨ Funcionalidades

* **Adicionar Livros:** Um formulário modal suave permite adicionar novos livros com título, autor, URL da capa e status de leitura.
* **Visualização em Cartões:** Os livros são exibidos em formato de cartões responsivos que se ajustam ao tamanho do ecrã.
* **Marcar como Lido/Não Lido:** Altere o status de leitura de um livro com um único clique, atualizando visualmente o botão.
* **Apagar Livros:** Remova livros da sua biblioteca de forma permanente com um botão de apagar.
* **Interface Moderna:** Efeitos de `hover` nos cartões e transições suaves no aparecimento do modal para uma melhor experiência de utilizador.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Estilização moderna com:
    * Grid Layout e Flexbox para um layout responsivo e alinhado.
    * Variáveis CSS (`:root`) para um tema fácil de manter.
    * Transições e Transformações para animações suaves.
* **JavaScript (ES6+):**
    * Manipulação do DOM para criar, atualizar e remover elementos dinamicamente.
    * Programação Orientada a Objetos (básica) com o construtor `Book`.
    * Delegação de Eventos para uma gestão de eventos eficiente.

## 🏃‍♂️ Como Executar

O projeto é 100% front-end e não necessita de nenhuma instalação ou servidor.

1.  Clone ou faça o download deste repositório.
2.  Abra o ficheiro `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).
3.  Comece a adicionar os seus livros!

ou acesse o link do [pages](https://moruan06.github.io/Livraria/)

## 🧠 Principais Aprendizados e Conceitos Aplicados

Este projeto foi uma excelente oportunidade para praticar conceitos fundamentais do desenvolvimento web:

* **Manipulação do DOM:** A lógica principal gira em torno da criação dinâmica dos cartões de livros a partir de um array de dados, atualizando o `innerHTML` de um container principal.
* **Delegação de Eventos:** Para gerir os cliques nos botões "Lido" e "Apagar", foi utilizado um único `event listener` no container `<main>`. Esta abordagem é altamente eficiente e funciona para qualquer elemento adicionado dinamicamente, evitando a necessidade de adicionar um listener a cada botão individualmente.
* **Lógica Orientada a Objetos:** O uso de um construtor `Book` para criar objetos de livro ajudou a organizar melhor os dados e a encapsular funcionalidades, como o método `toggleStatus()`.
