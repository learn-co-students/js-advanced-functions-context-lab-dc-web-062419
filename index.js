/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeDataArray) {
    let firstName = employeeDataArray[0];
    let familyName = employeeDataArray[1];
    let title = employeeDataArray[2];
    let payPerHour = employeeDataArray[3];
    let timeInEvents = []
    let timeOutEvents = []

    return {firstName: firstName, familyName: familyName, title: title, payPerHour: payPerHour, timeInEvents: timeInEvents, timeOutEvents: timeOutEvents}
}

function createEmployees(allEmployeesArray) {
    return allEmployeesArray.map(employee => {return createEmployeeRecord(employee)})
}


function createTimeInEvent(dateTime) {
    let [date, hour] = dateTime.split(' ')

    let timeObject = {
        hour: parseInt(hour),
        date: date,
        type: "TimeIn"
    }
  
    this.timeInEvents.push(timeObject)

    return this
}

function createTimeOutEvent(dateTime) {
    let [date, hour] = dateTime.split(' ')

    let timeObject = {
        hour: parseInt(hour),
        date: date,
        type: "TimeOut"
    }
  
    this.timeOutEvents.push(timeObject)

    return this
}

function hoursWorkedOnDate(dayInQ) {
    let timeIn = this.timeInEvents.find(el => el.date == dayInQ).hour
    let timeOut = this.timeOutEvents.find(el => el.date == dayInQ).hour

    return (parseInt(timeOut) - parseInt(timeIn))/100
    // return timeIn
}

function wagesEarnedOnDate(dayInQ) {
    let hours = hoursWorkedOnDate.call(this, dayInQ)

    return hours * this.payPerHour
}

function calculatePayroll() {
    return this
}

function createEmployeeRecords(csv) {
    return csv.map(row => createEmployeeRecord(row))
}

function findEmployeebyFirstName(allEmployeeData, firstName) {
    return allEmployeeData.find(record => record.firstName == firstName)
}

// function calculatePayroll(allEmployees) {
//     return allEmployees.reduce(function(memo, record){return memo + allWagesFor.call(record)} )
// }

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}