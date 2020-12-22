import operate from './Operate';

const calculate = (data, buttonName) => {
  let { total, next } = data;
  const { operation } = data;
  switch (buttonName) {
    case '+':
    case '-':
    case 'x':
    case '÷':
      operate(next, operation, buttonName);
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case 'AC':
      total = 0;
      next = 0;
      break;
    default:
      total = 'Error';
      break;
  }
  return { total, next, operation };
};

export default calculate;
