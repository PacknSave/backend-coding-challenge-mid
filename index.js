const orders = require('./sampleData.json');
const { getSalesByWeek } = require('./challenge');
const assert = require('assert')


let startDate = new Date(Date.UTC(2021, 11, 1)).getTime(), endDate = new Date(Date.UTC(2021, 11, 29)).getTime();
let sales = getSalesByWeek(orders, startDate, endDate);

try {
  assert.deepEqual(sales, [1753, 0, 4051, 889]);
  console.log('Passed!')
}
catch (e) {
  console.log('Incorrect output!')
}
