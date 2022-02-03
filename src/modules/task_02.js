const getAddSum = (numbers) => {
  let starter = 0;
  let sum = 0;
  while (parseInt(numbers[starter], 10) >= 0) {
    sum += parseInt(numbers[starter], 10);
    starter += 1;
  }
  return sum;
};
module.exports = getAddSum;
