/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployees(employees) {
  return employees.map(createEmployeeRecord);
}

function createTimeInEvent(timeIn) {
  const clockEvent = {
    type: 'TimeIn',
    hour: parseInt(timeIn.split(' ')[1], 10),
    date: timeIn.split(' ')[0],
  };
  this.timeInEvents.push(clockEvent);
  return this;
}

function createTimeOutEvent(timeOut) {
  const clockEvent = {
    type: 'TimeOut',
    hour: parseInt(timeOut.split(' ')[1]),
    date: timeOut.split(' ')[0],
  };
  this.timeOutEvents.push(clockEvent);
  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.filter(
    clockEvent => clockEvent.date === date,
  )[0].hour;

  const timeOut = this.timeOutEvents.filter(
    clockEvent => clockEvent.date === date,
  )[0].hour;
  return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

let allWagesFor = function() {
  let eligibleDates = this.timeInEvents.map(function(e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function(memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0,
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

function calculatePayroll(employees) {
  return employees
    .map(employee => allWagesFor.call(employee))
    .reduce((a, b) => a + b, 0);
}

function createEmployeeRecords(employees) {
  return employees.map(employee => createEmployeeRecord(employee));
}

function findEmployeebyFirstName(employees, name) {
  return employees.find(employee => employee.firstName === name);
}
