# Setting up TypeScript Environment

## Stack
1. **Language**: TypeScript
2. **Framework**: NestJS

## Installations

### 1. Install Node.js
1. To install the latest version of Node.js, you can use Node Version Manager (nvm). First, install nvm following the instructions on the official GitHub repository:
    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    ```
2. After installing nvm, restart your terminal and install the latest version of Node.js:
    ```sh
    nvm install node
    ```

### 2. Install Yarn
1. To install the Yarn package manager, run:
    ```sh
    npm install -g yarn
    ```

### 3. Initialize New Project
1. To initialize a new project using Yarn, execute:
    ```sh
    yarn init -y
    ```

### 4. Install Dependencies
1. Install necessary dependencies for TypeScript and Jest development:
    ```sh
    yarn add typescript jest @types/jest ts-node ts-jest nodemon
    ```

## Configuring TypeScript

TypeScript is a typed superset of JavaScript developed by Microsoft. It allows transpiling TypeScript code to JavaScript.

### 1. Initialize TypeScript
1. To create a TypeScript configuration file, run:
    ```sh
    npx tsc --init
    ```
2. Include the `src` and `test` directories in the generated `tsconfig.json` file.
    ```sh
    {
        ...
        "include": [
            "src",
            "test"
        ]
    }
    ```

## Configuring Jest Tests

### 1. Initialize Jest Configuration
1. To create a Jest configuration file for TypeScript, run:
    ```sh
    npx ts-jest config:init
    ```

## Initial Code

### 1. Creating Sum Function

Create the `src` directory and `main.ts` file inside it. Add the following code:

```typescript
// src/main.ts
export function sum(a: number, b: number): number {
  return a + b;
}
```

### 2. Running TypeScript Application
1. To execute the application, use
    ```sh
    npx ts-node src/main.ts
    ```

### 3. Writing Tests
Create the `test` directory and `main.test.ts` file inside it. Add the following code:

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
1. To run unit tests, use the following command:
    ```sh
    npx jest
    ```
2. To generate a test coverage report, use:
    ```sh
    npx jest --coverage
    ```
3. To continuously run tests while developing, use:
    ```sh
    npx jest --watchAll
    ```

### Final Project Structure

The project structure should look like this:

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