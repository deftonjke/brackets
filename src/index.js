module.exports = function check(str, bracketsConfig) {
	let stack = [];
  let split = str.split('');
  split.forEach(el => {
  	if (el === bracketsConfig[0]) {
    	stack.push(el);
    } else if (el === bracketsConfig[1]) {
    	stack.pop();
    }
  });
  return (stack.length === 0) ? true : false;
}