import operate from '../../logic/Operate';

describe('check operations entered', () => {
  test('multiplication(X)', () => {
    const result = operate('2', '2', 'x');
    expect(result).toEqual('4');
  });

  test('Substracton(-)', () => {
    const result = operate('8', '4', '-');
    expect(result).toEqual('4');
  });

  test('Addition(+)', () => {
    const result = operate('9', '9', '+');
    expect(result).toEqual('18');
  });

  test('Division(÷)', () => {
    const result = operate('50', '5', '÷');
    expect(result).toEqual('10');
  });

  test('Division(÷)', () => {
    const result = operate('11', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  test('Modulus(%)', () => {
    const result = operate('22', '11', '%');
    expect(result).toEqual('0');
  });

  test('Modulus(%)', () => {
    const result = operate('22', '0', '%');
    expect(result).toEqual("Can't find modulo as can't divide by 0.");
  });
});
