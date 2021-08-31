module.exports = function check(str, bracketsConfig) {

  let stack = [];
  let split = str.split('');

  split.forEach((symbol) => {
    stack.push(symbol);

    bracketsConfig.forEach(bracket => {
      if (stack[stack.length - 2] === bracket[0] && symbol === bracket[1]) {
        stack.pop();
        stack.pop();
      }
    });
  });

  return stack.length === 0;
}

