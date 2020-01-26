const connection = require("./connection");
const inquirer = require ("inquirer");
const mysql = require("mysql");

connection = mysql.createConnection({
    host: "local host",
    port: 3306,
    user: "root",
    password: "root",
    database: employee_db
});

connection.connect( function(err){
    if (err) throw err;
    manageMenu();
})

 function manageMenu (){
     inquirer.prompt(
         {
             name: "option",
             type: "list",
             message: "What would you like to do?",
             choices: ["View Current Employees", "Add Employees", "Remove Employee", "Update Employee Records", "Exit"] 
         }
     ).then(function (option){
         switch (option) {
             case "View Current Employees":
                 currentEmployees();
                 break;
            case "Add Employees":
                 addEmployees();
                 break;
            case "Remove Employees":
                 removeEmployees();
                 break;
        case "Update Employees Records":
                 updateEmployees();
                 break;
             default:
                 connection.end()
                 break;
         }
     })
 }