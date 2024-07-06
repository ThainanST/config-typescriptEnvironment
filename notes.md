Claro, aqui está o tutorial com os passos numerados:

# Configurando o Ambiente TypeScript

## Stack
1. **Linguagem**: TypeScript
2. **Framework**: NestJS

## Instalações

### 1. Instalar Node.js
1. Para instalar a versão mais recente do Node.js, você pode usar o Node Version Manager (nvm). Primeiro, instale o nvm seguindo as instruções no repositório oficial do GitHub:
    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    ```
2. Depois de instalar o nvm, reinicie o terminal e instale a versão mais recente do Node.js:
    ```sh
    nvm install node
    ```

### 2. Instalar Yarn
1. Para instalar o gerenciador de pacotes Yarn, execute:
    ```sh
    npm install -g yarn
    ```

### 3. Iniciar Novo Projeto
1. Para iniciar um novo projeto com Yarn, execute:
    ```sh
    yarn init -y
    ```

### 4. Instalar Dependências
1. Instale as dependências necessárias para o desenvolvimento com TypeScript e Jest:
    ```sh
    yarn add typescript jest @types/jest ts-node ts-jest nodemon
    ```

## Configurando TypeScript

TypeScript é um superset tipado do JavaScript desenvolvido pela Microsoft. Ele permite a transpilação do código TypeScript para JavaScript.

### 1. Inicializar TypeScript
1. Para criar um arquivo de configuração do TypeScript, execute:
    ```sh
    npx tsc --init
    ```
2. Inclua os diretórios `src` e `test` no arquivo `tsconfig.json` gerado.
```sh
{
    ...
    ,
    "include": [
        "src",
        "test"
    ]
}
```

## Configurando Testes com Jest

### 1. Inicializar Configuração do Jest
1. Para criar um arquivo de configuração do Jest para TypeScript, execute:
    ```sh
    npx ts-jest config:init
    ```

## Código inicial

### 1. Criando a Função de Soma

Crie o diretório `src` e o arquivo `main.ts` dentro dele. Adicione o seguinte código:

```typescript
// src/main.ts
export function sum(a: number, b: number): number {
  return a + b;
}
```

### 2. Rodar Aplicação TypeScript
1. Para executar a aplicação, use:
    ```sh
    npx ts-node src/main.ts
    ```

### 3. Escrevendo os Testes

Crie o diretório `test` e o arquivo `main.test.ts` dentro dele. Adicione o seguinte código:

```typescript
// test/main.test.ts
import { sum } from '../src/main';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + -1 to equal -2', () => {
  expect(sum(-1, -1)).toBe(-2);
});
```

### 4. Rodar Testes
1. Para rodar os testes unitários, utilize os seguintes comandos:
    ```sh
    npx jest
    ```
2. Para gerar um relatório de cobertura de testes, utilize:
    ```sh
    npx jest --coverage
    ```
3. Para manter os testes em execução contínua enquanto desenvolve, utilize:
    ```sh
    npx jest --watchAll
    ```

### Estrutura Final do Projeto

A estrutura do projeto deve ficar assim:

```
your-project/
├── node_modules/
├── src/
│   └── main.ts
├── test/
│   └── main.test.ts
├── jest.config.js
├── package.json
├── tsconfig.json
└── yarn.lock
```

Ao rodar o comando `npx jest`, você deverá ver a saída indicando que os testes foram executados com sucesso.