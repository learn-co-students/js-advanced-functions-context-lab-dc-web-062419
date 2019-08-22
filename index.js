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




// Your code here

function createEmployeeRecords(arr){
   return arr.map(worker => createEmployeeRecord(worker))
}
function createEmployeeRecord(arr){
    return {firstName: arr[0], familyName: arr[1], title: arr[2], 
        payPerHour: arr[3], timeInEvents: [], timeOutEvents: [], } 
}

function createEmployees(arr){
   return arr.map( employee => createEmployeeRecord(employee))
}

 let createTimeInEvent = function (timestamp){
      let  [date1, time1] = timestamp.split(' ')
    let timeIn = {type: 'TimeIn', hour: parseInt(time1), date: date1}
    this.timeInEvents.push(timeIn)
    return this
}
let  createTimeOutEvent = function(timestamp){

    let  [date1, time1] = timestamp.split(' ')
  let timeIn = {type: 'TimeOut', hour: parseInt(time1), date: date1}
  this.timeOutEvents.push(timeIn)
  return this
}



let hoursWorkedOnDate = function(timestamp){

   let timein = this.timeInEvents.filter(elm => elm.date === timestamp)[0].hour
   let timeout = this.timeOutEvents.filter(elm => elm.date === timestamp)[0].hour
   


    return (timeout - timein)/100
}







let wagesEarnedOnDate = function(timestamp){
    let hoursWorked = hoursWorkedOnDate.call(this, timestamp)

    return hoursWorked * this.payPerHour
}





function findEmployeebyFirstName(arr, name){
 return arr.find(worker => worker.firstName === name) 
}




// function calculatePayroll(empRecords){
//     let wagesForAll = empRecords.map(worker => worker.allWagesFor())
//   return  wagesForAll.reduce((total, i) => total + i)
// }

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}








