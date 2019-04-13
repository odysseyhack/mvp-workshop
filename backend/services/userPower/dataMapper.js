'use strict';

const moment = require('moment');

module.exports = {
  mapStatistic
};

const days = {
  Monday: 2,
  Tuesday: 3,
  Sunday: 0,
  Saturday: 1
};

function mapStatistic (statistic) {
  const temp = [];

  statistic.forEach(element => {
    const check = moment(element.date, 'YYYY/MM/DD');
    temp.push({
      name: check.format('dddd'),
      Produced: element.produced,
      Sent: element.grid,
      Spent: element.consumed
    });
  });

  const response = [];
  temp.forEach(element => {
    if (!response[days[element.name]]) {
      response[days[element.name]] = {
        ...element
      };
    } else {
      response[days[element.name]].Produced += element.Produced;
      response[days[element.name]].Sent += element.Sent;
      response[days[element.name]].Spent += element.Spent;
    }
  });

  return response;
}
