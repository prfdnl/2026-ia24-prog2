# Construindo um To-Do List com HTML, CSS e JavaScript

## Introdução

Antes de começar o projeto em si, é importante entender o que significa desenvolver uma aplicação frontend. Quando falamos em frontend, estamos nos referindo à parte visual e interativa de um sistema, ou seja, tudo aquilo com que o usuário consegue interagir diretamente dentro do navegador.

Botões, formulários, menus, listas, campos de texto, animações e mudanças visuais fazem parte do frontend.

Na prática, o frontend funciona como a camada de comunicação entre o usuário e o sistema. É através dele que informações são exibidas, dados são digitados e ações são executadas.

Quando alguém acessa:

* uma rede social
* uma loja virtual
* um sistema bancário
* uma plataforma de vídeos

praticamente tudo o que aparece visualmente está sendo controlado por tecnologias frontend.

O desenvolvimento frontend moderno é baseado principalmente em três tecnologias fundamentais:

* HTML
* CSS
* JavaScript

Cada uma possui uma responsabilidade específica.

O HTML organiza a estrutura da página.

O CSS controla aparência e layout.

O JavaScript adiciona comportamento, lógica e interatividade.

Mesmo aplicações extremamente complexas continuam usando exatamente essa mesma base estrutural.

---

# O valor didático de um To-Do List

Criar uma lista de tarefas pode parecer algo simples à primeira vista, mas esse tipo de projeto possui um valor educacional enorme.

Esse exercício ensina vários fundamentos importantes ao mesmo tempo:

* estruturação de páginas
* manipulação do DOM
* eventos
* persistência de dados
* renderização dinâmica
* fluxo de estado
* organização de código

Além disso, esse projeto ajuda o estudante a entender que páginas web modernas não são documentos estáticos.

Aplicações atuais reagem constantemente às ações do usuário.

Quando alguém clica em um botão, digita algo ou remove um item da tela, existe JavaScript executando operações internas para atualizar a interface.

Ao desenvolver esse projeto, o aluno aprende exatamente como esse processo acontece.

Mesmo plataformas muito maiores, como:

* Trello
* Notion
* Todoist
* Google Keep

continuam utilizando os mesmos princípios fundamentais vistos aqui.

O que muda é apenas:

* escala
* complexidade
* arquitetura
* infraestrutura

Os fundamentos continuam iguais.

---

# Estrutura do projeto

O projeto será dividido em três arquivos:

```txt
index.html
main.css
main.js
```

Cada arquivo possui uma responsabilidade específica.

| Arquivo      | Responsabilidade           |
| ------------ | -------------------------- |
| `index.html` | Estrutura da aplicação     |
| `main.css`   | Aparência visual           |
| `main.js`    | Comportamento da aplicação |

Essa separação melhora:

* organização
* manutenção
* legibilidade
* reutilização
* escalabilidade

---

# Criando o HTML da aplicação

O HTML define a estrutura da página.

Ele informa ao navegador:

* quais elementos existem
* qual o significado desses elementos
* onde cada conteúdo será exibido

## Arquivo `index.html`

```html
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <title>To-Do List</title>
  <link rel='stylesheet' href='main.css'>
  <script type="module" src="./main.js"></script>
</head>
<body>
  <main id="app">
    <div id="input-container">
      <input type="text" id="task-input" placeholder="Enter a new task">
      <button id="add-button">Add Task</button>
    </div>
    <ul id="list">
      <template>
        <li>
          <span class="title">title</span>
          <button class="bt-delete">Delete</button>
        </li>
      </template>
    </ul>
  </main>
</body>
</html>
```

---

# Explicando cada tag do HTML

## `<!DOCTYPE html>`

Documentação oficial:

[DOCTYPE no MDN](https://developer.mozilla.org/pt-BR/docs/Glossary/Doctype?utm_source=chatgpt.com)

Essa instrução informa ao navegador que o documento utiliza HTML5.

Sem ela, o navegador pode ativar modos antigos de compatibilidade, causando inconsistências na renderização da página.

---

# A tag `<html>`

Documentação oficial:

[Tag html no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/html?utm_source=chatgpt.com)

```html
<html lang="pt-BR">
```

Essa é a raiz principal do documento HTML.

Todo o restante da página precisa existir dentro dela.

O atributo:

```html
lang="pt-BR"
```

define o idioma principal da página.

Isso ajuda:

* leitores de tela
* mecanismos de busca
* tradutores automáticos
* acessibilidade

---

# A tag `<head>`

Documentação oficial:

[Tag head no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/head?utm_source=chatgpt.com)

A tag `<head>` funciona como uma área de configuração do documento.

Ela não representa conteúdo visual diretamente.

Dentro dela normalmente colocamos:

* metadados
* título
* CSS
* scripts
* configurações gerais

---

# A tag `<meta>`

Documentação oficial:

[Tag meta no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/meta?utm_source=chatgpt.com)

A tag `<meta>` define metadados sobre a página.

## Definindo codificação de caracteres

```html
<meta charset="UTF-8">
```

Essa configuração define o padrão de codificação textual utilizado pelo documento.

O UTF-8 suporta praticamente todos os caracteres modernos.

---

## Configuração de responsividade

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>
```

Essa configuração informa ao navegador que a largura da página deve acompanhar a largura real da tela do dispositivo.

Isso é essencial para celulares e tablets.

---

# A tag `<title>`

Documentação oficial:

[Tag title no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/title?utm_source=chatgpt.com)

```html
<title>To-Do List</title>
```

Define o nome exibido:

* na aba do navegador
* nos favoritos
* no histórico
* em resultados de busca

---

# A tag `<link>`

Documentação oficial:

[Tag link no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/link?utm_source=chatgpt.com)

```html
<link
  rel="stylesheet"
  href="main.css"
>
```

Conecta o arquivo CSS ao HTML.

Sem isso, a página apareceria apenas com estilos padrões do navegador.

---

# A tag `<script>`

Documentação oficial:

[Tag script no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/script?utm_source=chatgpt.com)

```html
<script
  type="module"
  src="./main.js"
></script>
```

Essa tag carrega o JavaScript da aplicação.

O JavaScript será responsável pela lógica e interatividade.

O atributo:

```html
type="module"
```

faz o navegador interpretar o código usando módulos modernos.

---

# A tag `<body>`

Documentação oficial:

[Tag body no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/body?utm_source=chatgpt.com)

O `<body>` representa todo conteúdo visual exibido para o usuário.

Tudo que aparece na tela fica dentro dele.

---

# A tag `<main>`

Documentação oficial:

[Tag main no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/main?utm_source=chatgpt.com)

```html
<main id="app">
```

Representa semanticamente o conteúdo principal da aplicação.

O atributo:

```html
id="app"
```

cria um identificador único usado pelo JavaScript.

---

# A tag `<div>`

Documentação oficial:

[Tag div no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/div?utm_source=chatgpt.com)

```html
<div id="input-container">
```

A `<div>` funciona como um container genérico.

Ela agrupa elementos relacionados.

Neste caso:

* input
* botão

---

# A tag `<input>`

Documentação oficial:

[Tag input no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/input?utm_source=chatgpt.com)

```html
<input
  type="text"
  id="task-input"
  placeholder="Digite uma tarefa"
>
```

Cria um campo de entrada de texto.

## Explicando atributos

### `type="text"`

Permite entrada textual simples.

### `id="task-input"`

Cria um identificador usado pelo JavaScript.

### `placeholder`

Exibe um texto temporário de ajuda.

---

# A tag `<button>`

Documentação oficial:

[Tag button no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/button?utm_source=chatgpt.com)

```html
<button id="add-button">
  Adicionar
</button>
```

Cria um botão clicável.

O JavaScript escuta interações desse botão usando eventos.

---

# A tag `<ul>`

Documentação oficial:

[Tag ul no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/ul?utm_source=chatgpt.com)

```html
<ul id="list">
```

Representa uma lista não ordenada.

Cada tarefa será inserida nela como um `<li>`.

---

# A tag `<li>`

Documentação oficial:

[Tag li no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/li?utm_source=chatgpt.com)

```html
<li>
```

Representa um item individual da lista.

Cada tarefa criada gera um novo `<li>` dinamicamente.

---

# A tag `<span>`

Documentação oficial:

[Tag span no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/span?utm_source=chatgpt.com)

```html
<span class="title">
```

O `<span>` é um elemento inline usado para pequenas partes textuais.

Aqui ele armazena o título da tarefa.

---

# O elemento `<template>`

Documentação oficial:

[Tag template no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/template?utm_source=chatgpt.com)

```html
<template>
```

O `<template>` funciona como um modelo invisível.

O navegador não renderiza automaticamente seu conteúdo.

O JavaScript utiliza esse conteúdo como molde para criar novos elementos dinamicamente.

Isso evita criar elementos manualmente usando vários:

```javascript
document.createElement()
```

Esse padrão melhora:

* organização
* reutilização
* manutenção

---

# O CSS da aplicação

O CSS controla aparência e layout da interface.

Como estilização é um conteúdo muito extenso e recorrente, o foco principal deste tutorial será o funcionamento estrutural da aplicação.

Ainda assim, vale observar como o CSS organiza:

* alinhamento
* espaçamento
* responsividade
* feedback visual

## Arquivo `main.css`

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

#task-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#add-button {
  padding: 10px 20px;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

#add-button:hover {
  background-color: #218838;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.bt-delete {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.bt-delete:hover {
  background-color: #c82333;
}
```

> [!NOTE]
> O arquivo CSS não é alvo importante dessa atividade por isso foi compartilhado _ipsis litteris_.

---

# O que é DOM

DOM significa Document Object Model.

Quando o navegador lê o HTML, ele converte todos os elementos em objetos manipuláveis pelo JavaScript.

Cada elemento da página vira um objeto dentro de uma estrutura hierárquica.

Isso permite que o JavaScript:

* altere textos
* remova elementos
* crie elementos
* modifique estilos
* responda eventos

Toda interatividade moderna depende do DOM.

---

# O que são eventos em JavaScript

Eventos representam interações ou acontecimentos dentro da página.

Exemplos comuns:

| Evento      | Significado                 |
| ----------- | --------------------------- |
| `click`     | clique do usuário           |
| `keypress`  | tecla pressionada           |
| `submit`    | envio de formulário         |
| `mouseover` | mouse passou sobre elemento |

O JavaScript consegue escutar eventos usando:

```javascript
addEventListener()
```

Isso permite criar interfaces reativas.

---

# O JavaScript da aplicação

## Arquivo `main.js`

```javascript
// Select DOM elements
const app = document.querySelector('#app')
const input = app.querySelector('#task-input')
const addButton = app.querySelector('#add-button')
const list = app.querySelector('#list')
const itemTemplate = list.querySelector('template')

// Save tasks to local storage
function saveToLocalStorage() {
  const tasks = []

  list.querySelectorAll('li').forEach(li => {
    const title = li.querySelector('.title').textContent
    tasks.push(title)
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Load tasks from local storage and add them to the list
function loadFromLocalStorage() {
  const tasks = JSON.parse(
    localStorage.getItem('tasks') || '[]'
  )

  tasks.forEach(title => {
    const task = createDomTask(title)
    list.appendChild(task)
  })
}

// Create a DOM element for a task
function createDomTask(title) {
  const task = itemTemplate.content.cloneNode(true)

  task.querySelector('.title').textContent = title

  task.querySelector('.bt-delete')
    .addEventListener('click', (e) => {

      e.target.closest('li').remove()

      saveToLocalStorage()
    })

  return task
}

// Create a new task and add it to the list
function createNewTask() {
  const title = input.value.trim()

  if (!title) return

  const task = createDomTask(title)

  list.appendChild(task)

  input.value = ''

  saveToLocalStorage()
}

// Event listeners
addButton.addEventListener(
  'click',
  createNewTask
)

input.addEventListener('keypress', (e) =>
  (e.key === 'Enter'
    ? createNewTask()
    : null)
)

// Load tasks from local storage on page load
loadFromLocalStorage()
```

---

# Explicando cada função JavaScript

## Selecionando elementos do DOM

```javascript
const app = document.querySelector('#app')
```

O método:

```javascript
querySelector()
```

permite localizar elementos da página usando seletores CSS.

O JavaScript precisa dessas referências para manipular os elementos depois.

---

# A função `saveToLocalStorage`

```javascript
function saveToLocalStorage()
```

Essa função salva tarefas no navegador usando `localStorage`.

Primeiro ela cria um array vazio:

```javascript
const tasks = []
```

Depois percorre todos os itens da lista:

```javascript
list.querySelectorAll('li')
```

Cada título é capturado:

```javascript
const title =
  li.querySelector('.title').textContent
```

E adicionado no array.

Por fim:

```javascript
localStorage.setItem()
```

salva os dados no navegador.

---

# O que é Local Storage

`localStorage` é um armazenamento interno do navegador.

Ele permite salvar dados localmente sem usar servidor.

Os dados permanecem salvos mesmo após:

* atualizar página
* fechar navegador
* reiniciar computador

Cada navegador possui seu próprio armazenamento isolado.

---

# A função `loadFromLocalStorage`

```javascript
function loadFromLocalStorage()
```

Essa função restaura tarefas salvas anteriormente.

Primeiro ela busca os dados:

```javascript
localStorage.getItem('tasks')
```

Depois converte a string JSON novamente em array:

```javascript
JSON.parse()
```

Por fim, recria visualmente cada tarefa no DOM.

---

# A função `createDomTask`

```javascript
function createDomTask(title)
```

Essa função cria visualmente uma tarefa usando o `<template>`.

O código:

```javascript
itemTemplate.content.cloneNode(true)
```

faz uma cópia completa do template.

Depois o texto é alterado:

```javascript
task.querySelector('.title')
  .textContent = title
```

Também é criado o evento de remoção da tarefa.

---

# A função `createNewTask`

```javascript
function createNewTask()
```

Essa função controla criação de novas tarefas.

Ela:

1. lê o texto digitado
2. remove espaços vazios
3. impede tarefas vazias
4. cria o elemento visual
5. adiciona na lista
6. limpa o input
7. salva os dados

---

# O que é localhost

Durante desenvolvimento normalmente usamos um servidor local.

Exemplo:

```txt
http://localhost:3000
```

`localhost` significa "esta própria máquina".

Tudo roda localmente no computador do desenvolvedor.

---

# Por que os dados não são compartilhados

A aplicação salva dados usando:

```javascript
localStorage
```

Isso significa que os dados pertencem apenas ao navegador do usuário.

Não existe:

* servidor central
* banco de dados online
* sincronização entre usuários

Cada pessoa possui sua própria lista isolada.

---

# O que é uma API RESTful

Uma API funciona como ponte de comunicação entre sistemas.

RESTful é um padrão arquitetural muito utilizado na web.

Com uma API, o frontend consegue enviar e receber dados de um servidor.

Fluxo simplificado:

```txt
Frontend → API → Banco de Dados
```

Isso permitiria:

* sincronização online
* múltiplos usuários
* login
* compartilhamento de tarefas

Métodos HTTP mais comuns:

| Método | Função       |
| ------ | ------------ |
| GET    | buscar dados |
| POST   | criar dados  |
| PUT    | atualizar    |
| DELETE | remover      |

---

# Conclusão

Mesmo sendo um projeto relativamente pequeno, esse To-Do List ensina praticamente toda base necessária para compreender aplicações frontend modernas.

Durante sua construção é possível aprender:

* HTML semântico
* CSS
* DOM
* eventos
* manipulação dinâmica
* persistência de dados
* armazenamento local
* templates
* fluxo de estado
* arquitetura frontend

O mais importante é perceber que aplicações reais continuam funcionando sobre exatamente os mesmos fundamentos apresentados aqui.
