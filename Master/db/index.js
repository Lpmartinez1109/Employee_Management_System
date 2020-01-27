var mysql = require("mysql");
var inquirer = require("inquirer");

connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    console.log("connect as id " + connection.threadId);
    manageMenu();
})

function manageMenu() {
    inquirer.prompt(
        {
            name: "option",
            type: "list",
            message: "What would you like to do?",
            choices: ["View Current Employees", "Add Employees", "Remove Employee", "Update Employee Records", "Exit"]
        }
    ).then(function (answer) {
        if (answer.option === "View Current Employees") {
            currentEmployees();
        } else if (answer.option === "Add Employees") {
            addEmployees();
        } else if (answer.option === "Remove Employee") {
            removeEmployee();
        } else if (answer.option === "Update Employee Records") {
            updateEmployees();
        } else {
            connection.end();
        }
    })
}
//  view current employees
function currentEmployees() {
    inquirer.prompt(
        {
            name: "view",
            type: "list",
            message: "What would you like to see?",
            choices: ["Department", "Role", "Employees", "Go Back"]

        }
    ).then(function (answer) {
        if (answer.view === "Department") {
            viewDepartment();
        } else if (answer.view === "Role") {
            viewRole();
        } else if (answer.view === "Employees") {
            viewEmployee();
        }
        else {
            manageMenu();
        }
    })
};
function viewDepartment() {
    connection.query(`select * from department`, function (err, result) {
        if (err) {
            console.log("Error!")
        }
        console.table(result)
        currentEmployees();
    })
};
function viewRole() {
    connection.query(`select * from role`, function (err, result) {
        if (err) {
            console.log("Error!");

        }
        console.table(result)
        currentEmployees();
    })

}
function viewEmployee() {
    connection.query(`select * from employee`, function (err, results) {
        if (err) {
            console.log("Error!");

        }
        console.table(results)
        currentEmployees();
    })
}
// add an employee
function addEmployees() {

    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is your employee's first name?"
        },
        {
            name: "lastName",
            type: "input",
            message: "What is your employee's last name?"
        },
        {
            name: "employeeRole",
            type: "list",
            message: "What role does this employee have?",
            choices: [1, 2, 3, 4]

        }
    ]).then(function (answer) {
        connection.query("insert into employee(first_name, last_name, role_id", {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.employeeRole
        }, function (err) {
            if (err) {
                console.log("Error!");

            }
            manageMenu();

        })
     })
}
// remove employee function
function removeEmployee() {
}