import calculate from '../../logic/calculate.js';

describe('AC pressed', () => {
  test('Clear everything', () => {
    expect(calculate({
      total: '5', next: '4', operation: '+',
    }, 'AC')).toEqual({
      total: 0, next: null, operation: null,
    });
  });
});

describe('number can be entered', () => {
  test('entered number from 0-9', () => {
    let buttonName = '4';
    let result = calculate({
      total: null, next: null, operation: null,
    }, buttonName);
    expect(result.next).toEqual('4');
    buttonName = '2';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('42');
  });
});

describe('get answer', () => {
  test('= pressed', () => {
    const result = calculate({
      total: '40', next: '10', operation: '-',
    }, '=');
    expect(result.total).toEqual('30');
  });
});

describe('Decimal number can be entered', () => {
  test('if (.) is pressed', () => {
    let buttonName = '5';
    let result = calculate({
      total: null, next: null, operation: null,
    }, buttonName);
    expect(result.next).toEqual('5');
    buttonName = '.';
    result = calculate(result, buttonName);
    buttonName = '3';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('5.3');
  });
});

describe('Negative number can be entered', () => {
  test('if (+/-) is pressed', () => {
    let btnName = '5';
    let result = calculate({
      total: null, next: null, operation: null,
    }, btnName);
    expect(result.next).toEqual('5');
    btnName = '+/-';
    result = calculate(result, btnName);
    expect(result.next).toEqual('-5');
  });
});
