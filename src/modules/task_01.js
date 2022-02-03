/* 86 a) Дано натуральное число n. Сколько цифр в числе n. */
const getLength = (number) => {
  const num = parseInt(number, 10);
  if (Number.isNaN(num) || num < 0) return null;
  return Math.ceil(Math.log10(num + 1));
};

module.exports = getLength;
