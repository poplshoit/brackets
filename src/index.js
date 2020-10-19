module.exports = function check(str, bracketsConfig) {
  const openBrackets = bracketsConfig.map((config) => config[0]);
  const closesBrackets = bracketsConfig.map((config) => config[1]);
  const stack = [];

  for (let i = 0; i <str.length; i++) {
    const currentSymbol = str[i];
    if (currentSymbol === '|' || currentSymbol === '7' || currentSymbol === '8') {
      if (stack.indexOf(currentSymbol) != -1) {
        stack.pop()
      } else {
      stack.push(currentSymbol)
    }
  }

  if (openBrackets.indexOf(currentSymbol) != -1) {
      stack.push(currentSymbol);
  }

  if (closesBrackets.indexOf(currentSymbol) != -1) {
    const lastStackBracket = stack.pop();

    const openIndex = openBrackets.indexOf(lastStackBracket);
    const closeIndex = closesBrackets.indexOf(currentSymbol);
    if ( openIndex !== closeIndex ) {
      return false;
    }
  }
}
  return !stack.length 
}