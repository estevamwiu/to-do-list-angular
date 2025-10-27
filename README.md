## 📝 To-Do List - Just do it.

Um aplicativo simples e intuitivo de gerenciamento de tarefas, desenvolvido com Angular, Bulma e JSON Server, com o objetivo de ajudar o usuário a organizar suas atividades diárias de forma prática e eficiente.

---

## 🚀 Funcionalidades

➕ Adicionar novas tarefas

📋 Listar tarefas cadastradas

✅ Marcar tarefas como concluídas

🗂️ Página exclusiva para tarefas concluídas

🧭 Navegação entre páginas (Home, Concluídas, Sobre)

💾 Integração com JSON Server para simular persistência de dados

🎨 Interface moderna e responsiva com Bulma

---

## 🧠 Tecnologias Utilizadas

• Angular	Framework: Principal para criação dos componentes e lógica da aplicação

• TypeScript: Linguagem utilizada para tipagem e organização do código

• HTML5 / CSS3:	Estrutura e estilização da aplicação

• Bulma CSS Framework:	Framework CSS utilizado para o layout responsivo

• JSON Server: API fake utilizada para armazenar as tarefas

---

## ⚙️ Como Executar o Projeto

1️⃣ Clonar o repositório:
git clone https://github.com/estevamwiu/to-do-list-angular.git

2️⃣ Instalar as dependências:
cd to-do-list-angular
npm install

3️⃣ Iniciar o servidor JSON (em outro terminal):
npx json-server --watch db.json --port 3000

4️⃣ Rodar o projeto Angular:
ng serve

5️⃣ Acessar no navegador:
http://localhost:4200/

---

## 📁 Estrutura do Projeto

📂 to-do-list-angular

 ┣ 📂 src
 
 ┃ ┣ 📂 app
 
 ┃ ┃ ┣ 📂 components
 
 ┃ ┃ ┣ 📂 pages
 
 ┃ ┃ ┣ 📂 services
 
 ┃ ┃ ┗ app.module.ts
 
 ┃ ┣ 📂 assets
 
 ┃ ┗ index.html
 
 ┣ db.json
 
 ┣ angular.json
 
 ┣ package.json
 
 ┗ README.md

 ---

## 🧩 Melhorias Futuras

🔔 Sistema de notificação de tarefas pendentes

📅 Organização por data e prioridade

💡 Login e autenticação de usuários

☁️ Integração com backend real (Firebase ou Node.js)
