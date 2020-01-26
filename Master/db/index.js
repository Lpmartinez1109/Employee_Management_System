var inquirer = require ("inquirer");
var mysql = require("mysql");

var PORT = process.env.PORT || 8080;

connection = mysql.createConnection({
    host: "local host",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_db"
});

connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
    }
    console.log("connect as id " + connection.threadId);
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
     ).then(function(answer){
         if(answer.option === "View Current Employees"){
             currentEmployees();
         }else if(answer.option === "Add Employees"){
             addEmployees();
         }else if(answer.option === "Remove Employee"){
             removeEmployee();
         }else if(answer.option === "Update Employee Records"){
           updateEmployees();  
         }else{
             connection.end();
         }
     })
 }
function currentEmployees() {
    inquirer.prompt(
        {
            name: "view",
            type: "list",
            message: "What would you like to see?",
            choices: [ "Department", "Role", "Employees"]

        }
    ).then(function(answer){
        if(answer.view === "Department"){
            viewDepartment();
        }else if(answer.view === "Role"){
            viewRole();
        }else if(answer.view === "Employees"){
            viewEmployee();
        }
    })
};
    function viewDepartment(){
        // connection.query("select * from department(name)"  , function(err, result){
        //     if (err) throw err;
        //     console.log(result);
            
        // })
        manageMenu();
    };
    function viewRole(){
        manageMenu();
    }
    function viewEmployee() {
        manageMenu();
    }