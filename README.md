# Backend - Sistema de Gerenciamento de Projetos
## Trabalho 1 - Engenharia de Software 2
Implementação do backend do 1º trabalho da disciplina de Engenharia de Software II sobre Scrum.

## Índice

1. [Descrição](#descrição)
2. [Tecnologias Utilizadas](#tecnologias)
3. [Instalação](#instalação)
4. [Execução](#execução)
5. [Estrutura do Projeto](#estrutura-do-projeto)
   1. [Diretórios](#estrutura-de-diretórios)
   2. [Descrição](#descrição-dos-diretórios)
3. [Instalação](#instalação)


## Descrição

O projeto consiste numa aplicação de Cadastros de Projetos utilizando o framework SCRUM. Essa é a implementação do backend das rotas e do acesso ao banco de dados sobre as funcionalidades de consultar, listar, cadastrar, alterar e remover profissionais, times e projetos.
Para implementar os recursos foi utilizado o framework Node.js, o banco de dados para armazenar as informaçoes escolhido foi o Mysql.

## Tecnologias

- [Node.js](https://nodejs.org/en): Framework Node.js para desenvolvimento da API.
- [Mysql](https://www.mysql.com/): Banco de dados para armazenamento das informaçoes.

## Instalação

- Versão do Node: 20.11.1

1. Clone o repositório: `git clone git@github.com:guilhermemon18/trabalho1-es2-backend.git`
2. Instale as dependências:
   ```console npm install```

## Execução
1. Entre na raiz do repositório do projeto.
2. Execute o seguinte comando: `npm start`

- Ao executar esse comando, o servidor de desenvolvimento do backend irá tentar inicializar e rodar na porta 3000 por padrão, se ocorrer algum erro será utilizada outra porta disponível.

## Estrutura do projeto

### Estrutura de diretórios

Os arquivos do repositório seguem a seguinte estrutura:

```
└── /src
├── /controller
├── /database
├── /routes
└── /services

```

### Descrição dos Diretórios

- '/src/controller': Contém os controladores de cada funcionalidade (projetos, times, profissionais).

- '/src/database': Contém os arquivos de conexão e aquisição de dados com o banco de dados.

- '/src/routes': Contém as rotas para aquisição e requisições para  Profissional, Projeto e Time.

- '/src/services': Contém os serviços (regras de negócio).
