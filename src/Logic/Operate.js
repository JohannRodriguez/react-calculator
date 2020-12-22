import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total = 0;
  if (operation === '+') {
    total = Big(numberOne) + Big(numberTwo);
  }
  if (operation === '-') {
    total = Big(numberOne) - Big(numberTwo);
  }
  if (operation === 'x') {
    total = Big(numberOne) * Big(numberTwo);
  }
  if (operation === '÷') {
    total = Big(numberOne) / Big(numberTwo);
  }
  return total;
};

export default operate;
