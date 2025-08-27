# 📝 To-Do List React

Um **aplicativo de lista de tarefas** moderno, desenvolvido com **React** e **TypeScript**, pensado para **organizar seus estudos ou tarefas do dia a dia**.  

O app oferece **adição, exclusão e acompanhamento do progresso** de cada tarefa, com uma interface **responsiva, intuitiva e acessível**, garantindo que você tenha controle total sobre suas atividades em qualquer dispositivo.

🔗 [Acesse o site](https://projeto-7-sage.vercel.app/)

---

## 🚀 Funcionalidades

* Adição de tarefas personalizadas com título e categoria
* Edição e exclusão de tarefas com confirmação via modal
* Marcação de tarefas concluídas
* Contador de tarefas totais, pendentes e concluídas
* Barra de progresso de módulos concluídos
* Lista de tarefas organizada por categoria
* Estilo moderno com hover, active e efeitos de transição
* Responsivo em diferentes tamanhos de tela
* Modais de erro e confirmação
* Scroll customizado em listas de tarefas longas

---

## 🛠 Tecnologias Utilizadas

* React
* TypeScript
* CSS Modules
* Vite (bundler e setup inicial)
* Git e GitHub para versionamento

---
## 🎥 Demonstração



https://github.com/user-attachments/assets/51adf6a8-1305-45de-aeeb-cb30302a4155


## 📦 Estrutura do Projeto

```
projeto-7/
├─ public/
├─ src/
│ ├─ assets/ # Imagens e ícones
│ ├─ components/
│ │ ├─ component.Header/
│ │ ├─ component.Input/
│ │ ├─ component.Modal/
│ │ ├─ component.ProgressTracker/
│ │ ├─ component.TaskCard/
│ │ ├─ component.TaskCounter/
│ │ └─ component.TaskItem/
│ ├─ App.tsx
│ ├─ App.module.css
│ ├─ main.tsx
│ ├─ types.ts
├─ package.json
├─ tsconfig.json
├─ README.md
```

---

## 👥 Integrantes e Contribuições

### 🤝 Organização do Projeto

* **Letícia Capeletto** ([leticiacapeletto](https://github.com/leticiacapeletto))

  * Criou o repositório
  * Organização inicial da estrutura de pastas e arquivos
  * Setup inicial com Vite + React + TypeScript

---

### 💡 Funcionalidades e Responsáveis

#### 🔹 Componente TaskInput e Adição de Tarefas

* **dantaspereiraana** ([dantaspereiraana](https://github.com/dantaspereiraana))

  * Adição do campo de input para nova tarefa
  * Validação básica de entrada

#### 🔹 Componente TaskItem e Integração

* **htu6n7yi** ([htu6n7yi](https://github.com/htu6n7yi))

  * Criação do componente `TaskItem`
  * Integração com `TaskInput` para exibição dinâmica das tarefas

#### 🔹 TaskCounter e Monitoramento de Progresso

* **Maira Alves** ([Maira-Alves](https://github.com/Maira-Alves))

  * Atualização do componente `TaskCounter`
  * Contagem de tarefas totais, pendentes e concluídas

#### 🔹 Layout, Responsividade e Estilização

* **Renata Rocha** ([RenataARocha](https://github.com/RenataARocha))

  * Ajustes e refinamento do layout da aplicação
  * Responsividade completa dos componentes (cards, inputs, botões e modais)
  * Estilos e efeitos de hover/active para botões
  * Implementação de modais de erro e confirmação
  * Scroll customizado em listas de tarefas longas
  * Correções de cores, contraste e usabilidade
  * Ajustes finais no `App.module.css` e nos CSS Modules de cada componente

#### 🔹 Componentes e Funcionalidades Extras

* **Letícia Capeletto** ([leticiacapeletto](https://github.com/leticiacapeletto))

  * Configuração inicial do `TaskList` (removido posteriormente)
  * Setup do ambiente e integração com Vite + React + TypeScript

---

## ⚙️ Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências:

```bash
npm install
```

4. Execute a aplicação:

```bash
npm run dev
```

5. Abra o navegador em `http://localhost:5173/` (ou a porta que aparecer no terminal)

---

## ✨ Considerações Finais

Este projeto é uma aplicação de aprendizado colaborativo, focada em React e TypeScript, com atenção à responsividade, usabilidade e modularidade.
Todos os integrantes contribuíram para a construção de uma experiência intuitiva, estilizada e funcional para gerenciar tarefas de forma prática e visualmente agradável.
