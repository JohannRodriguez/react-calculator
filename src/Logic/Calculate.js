import operate from './Operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  switch (buttonName) {
    case '+':
    case '-':
    case 'x':
    case '÷':
      total = next;
      next = null;
      operation = buttonName;
      break;
    case '+/-':
      next = (next * (-1)).toString();
      break;
    case '%':
      next = (next / 100).toString();
      break;
    case '=':
      next = operate(total, next, operation);
      operation = null;
      total = null;
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    default:
      next = next ? next + buttonName : buttonName;
      break;
  }
  return { total, next, operation };
};

export default calculate;
