module.exports = function reverse (n) {
  let stringNumber = n.toString();
  let finalString = '';
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    finalString += stringNumber[i];
  }
  return parseInt(finalString);
}
