## Teste Controle Sistemas

Teste para vaga de emprego, utilizando React e Node Web API.

Basicamente uma agenda de contatos. Um CRUD Básico

---
## Tecnologias e linguagens que são utilizadas nesse projeto

#### Back-end
- Node.js 
- Banco de dados SQL Server 

#### Front-end
- React
- Material Ui
---
## Como rodar o projeto

1. Faça o clone do repositório;

2. Configure os dados de acesso ao Banco em (`./server/settings.json`). 

3. Configure o banco rodando os comandos do arquivo (`./server/start_db/`). Isso vai criar a database da agenda e uma tabela onde ficarão os contatos.

4. Agora basta inicar o server com `npm start` e o front com `yarn start`.

5. O server já está configurado pra rodar na porta 3000 e front também faz requisições já para `localhost:3000/contatos` então rodando primeiro o server, a aplicação do front já vai indentificar e pedir pra rodar em outra porta (provavelmente a 3001 ou 3002) 


        