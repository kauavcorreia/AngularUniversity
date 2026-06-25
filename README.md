# Angular University

## Objetivo

Aplicação Web desenvolvida em Angular para consulta de universidades ao redor do mundo utilizando a Universities API.

O sistema permite pesquisar universidades por país, visualizar informações institucionais, gerenciar favoritos, consultar histórico de pesquisas e acompanhar estatísticas dos resultados obtidos.

---

## Tecnologias Utilizadas

* Angular 21
* TypeScript
* Angular Material
* HttpClient
* Local Storage
* RxJS
* Chart.js (Bônus)

---

## Funcionalidades

### Pesquisa de Universidades

* Busca por país
* Consumo de API REST

### Resultados

* Nome da universidade
* País
* Domínio institucional
* Site oficial

### Filtro Local

* Pesquisa instantânea sem nova consulta à API

### Favoritos

* Adicionar favoritos
* Remover favoritos
* Persistência em Local Storage

### Histórico

* Registro dos últimos países pesquisados
* Data e hora da consulta

### Dashboard

* Quantidade de universidades
* Quantidade de domínios únicos
* Quantidade de favoritos

### Ordenação

* Nome A-Z
* Nome Z-A

### Responsividade

* Desktop
* Tablet
* Smartphone

---

## Estrutura do Sistema

src/
├── core/
├── pages/
├── shared/
├── assets/
└── app.routes.ts

---

## Instalação

git clone https://github.com/seu-usuario/AngularUniversity.git

cd AngularUniversity

npm install

ng serve

---

## API Utilizada

http://universities.hipolabs.com/search?country=Brazil

---

## Screenshots

### Tela Inicial

(adicionar imagem)

### Tela de Resultados

(adicionar imagem)

### Tela de Favoritos

(adicionar imagem)

---

## Autor

Nome: kauã vinicius correia

Curso: Sistemas de informação

Disciplina: Desenvolvimento Web em alta performace

## Licença

Este projeto está licenciado sob a Licença MIT.

A Licença MIT permite que qualquer pessoa utilize, copie, modifique, distribua e até comercialize o software, desde que o aviso de direitos autorais e a licença original sejam mantidos.

Consulte o arquivo `LICENSE` para mais informações.
