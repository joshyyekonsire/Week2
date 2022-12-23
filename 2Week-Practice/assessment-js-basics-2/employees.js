////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 1')
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

class Employee {
    constructor (name, shifts) {
        this.name = name;
        this.shifts = shifts;
        this.getSchedule = function getSchedule (name, shifts){
            console.log (this.name + ' works on shift: ' + this.shifts);
        }
    }
}

let empOne = new Employee ('Jess', 'weekday mornings, weekday afternoons')

let empTwo = new Employee ('Nick', 'weekday nights, weekend afternoons')
empOne.getSchedule (empOne)
empTwo.getSchedule (empTwo)


//////////////////PROBLEM 2////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 2')
 

class Manager extends Employee {
    constructor(name, shifts, employees){
        super (name, shifts)
        this.employees = employees;
        this.getEmployees = function getEmployees (){
            console.log (name + ' manages: ' + this.employees);
        };
        this.addEmployee = function addEmployee (emp){
this.employees += emp
        }
    }
}

let manager = new Manager ('Winston', 'weekdays mornings, weekday afternoons', ['Cece', ' Schmidt']);



manager.getEmployees (manager)

manager.addEmployee (' and Coach')
console.log ('Winston now manages: ' + manager.employees)
