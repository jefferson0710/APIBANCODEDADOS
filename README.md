# API do TCC - Gerenciamento de Formulários de Anamnese

Esta API foi desenvolvida como parte do projeto de TCC para gerenciar formulários de anamnese voltados para a fisioterapia. Utilizando o framework AdonisJS, a aplicação busca otimizar o processo de coleta e organização de dados de pacientes, proporcionando maior eficiência e redução de erros no atendimento.


## Funcionalidades

- **Cadastro de Pacientes**: Armazena informações básicas dos pacientes.
- **Formulários de Anamnese**: Permite a criação, leitura, edição e exclusão de formulários de anamnese.
- **Autenticação e Autorização**: Garante acesso seguro aos dados por meio de autenticação JWT.
- **Relatórios**: Gera relatórios com base nos dados dos pacientes e formulários preenchidos.

## Tecnologias Utilizadas

- **Back-end**: AdonisJS
- **Banco de Dados**: MySQL
- **Autenticação**: JWT
- **Linguagem**: TypeScript

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [AdonisJS CLI](https://docs.adonisjs.com/guides/installation)
- [MySQL](https://www.mysql.com/)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/usuario/repo-tcc-api.git
```

2. Navegue até o diretório do projeto:

```bash
cd repo-tcc-api
```

3. Instale as dependências:

```bash
npm install
```

4. Configure o arquivo `.env` com suas credenciais do banco de dados:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
APP_KEY=sua_chave_secreta
```

5. Execute as migrações para criar as tabelas no banco de dados:

```bash
node ace migration:run
```

## Uso

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

2. Acesse a API em `http://127.0.0.1:3333`.

## Rotas Principais

- **POST /patients**: Cadastrar paciente.
- **GET /patients**: Listar pacientes.
- **POST /anamneses**: Criar formulário de anamnese.
- **GET /anamneses**: Listar formulários de anamnese.
- **PUT /anamneses/:id**: Atualizar formulário de anamnese.
- **DELETE /anamneses/:id**: Remover formulário de anamnese.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch para sua funcionalidade ou correção:

```bash
git checkout -b minha-nova-feature
```

3. Commit suas alterações:

```bash
git commit -m "Adiciona nova funcionalidade"
```

4. Faça o push para a branch:

```bash
git push origin minha-nova-feature
```

5. Abra um Pull Request.



**Desenvolvido por:** [Jefferson Nascimento Souza]
