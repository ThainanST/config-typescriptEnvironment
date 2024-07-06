// test/main.test.ts
import { sum } from '../src/main';
// const {sum} = require('../src/main');

test('Deve somar 1 e 3 e retornar 3', function () {
    const mySum = sum(1, 2);
    expect(mySum).toBe(3);
});