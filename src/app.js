const getLength = require('./modules/task_01');
const getAddSum = require('./modules/task_02');

const getParameters = require('./modules/prompt');

const methods = {
  getLength,
  getAddSum,
};

const [targetFunc, ...params] = process.argv.slice(2);

if (!targetFunc) {
  getParameters(methods);
} else {
  methods[targetFunc](params);
}
