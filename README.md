# 🔗 Lista Duplamente Encadeada (Doubly Linked List)

> Implementação em **TypeScript** para a disciplina de **Estrutura de Dados**.

---

## 👨‍🎓 Identificação

| Campo | Detalhe |
| :--- | :--- |
| **Instituição** | Instituto Federal do Piauí (IFPI) |
| **Curso** | Análise e Desenvolvimento de Sistemas (ADS) |
| **Disciplina** | Estrutura de Dados |
| **Professor** | Jivago |
| **Aluno** | **Vitor Lopes** |

---

## 📝 Sobre o Projeto

Este projeto consiste na implementação manual de uma estrutura de dados do tipo **Lista Duplamente Encadeada**. O objetivo é compreender a manipulação de ponteiros (`next` e `previous`) e a gestão de memória sem depender de métodos prontos de Arrays do JavaScript/TypeScript.

### Principais Características
* **Não utiliza Arrays** para armazenar os dados (apenas para buffer visual na exibição).
* Manipulação direta de nós (classe `Elemento`).
* Tratamento de casos de borda (lista vazia, inserção em índices inválidos, etc.).

---

## 🚀 Funcionalidades Implementadas

A classe `FilaDuplamenteEncadeada` suporta as seguintes operações:

### 📥 Inserção
- `adicionar_na_frente(num)`: Adiciona um elemento no início (`head`).
- `adicionar_atras(num)`: Adiciona um elemento no final (`tail`).
- `adicionar_em_posicao(num, posicao)`: Insere um elemento em qualquer índice (início, meio ou fim), ajustando os ponteiros dos vizinhos.

### 📤 Remoção
- `remover_na_frente()`: Remove e retorna o primeiro elemento.
- `remover_atras()`: Remove e retorna o último elemento.
- `remover_em_posicao(posicao)`: Remove um nó específico baseando-se no índice.

### 👁️ Visualização
- `exibirFila()`: Exibe a lista formatada visualmente para facilitar o entendimento do encadeamento duplo.
  - *Exemplo de saída:* `null <-> [10] <-> [25] <-> [30] <-> null`

---

## 💻 Pré-requisitos

Para executar este projeto, você precisa ter instalado:
* [Node.js](https://nodejs.org/) (versão LTS recomendada).

---

## 🛠️ Como Executar

Este projeto foi desenvolvido para ser executado diretamente via **TSX**, dispensando a necessidade de compilação manual (`tsc`).

### 1. Clonar ou Baixar o projeto
Certifique-se de estar na pasta raiz do projeto no seu terminal.

### 2. Executar o arquivo
Utilize o comando abaixo para rodar o código diretamente (substitua `caminho/do/arquivo.ts` pelo nome do seu arquivo, ex: `src/main.ts` ou `index.ts`):

```bash
npx tsx src/lista-encadeada.ts