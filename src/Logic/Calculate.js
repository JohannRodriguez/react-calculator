const calculate = (data, buttonName) => {
  let { total, next } = data;
  const { operation } = data;
  console.log(buttonName);
  switch (buttonName) {
    case '+':
    case '-':
    case 'x':
    case '÷':
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
