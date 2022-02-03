const prompt = require('prompt-sync')({ sigint: true });

const getParameters = (obj) => {
  const func = prompt('Select the function : ');
  const parameters = [];
  let start = 0;

  while (start < 2) {
    const guess = prompt(start === 1 ? 'Run function[enter]' : 'Enter params :');

    if (guess === '') {
      start += 1;
    } else {
      start = 0;
      parameters.push(guess);
    }
  }
  return obj[func](parameters);
};

module.exports = getParameters;
