use employee_db;

insert into department(name) values ("Sales"), ("Engineering"), ("Finance"),("Legal");

insert into role (title, salary, department_id) values ("Sales Lead", 100000, 1), ("Salesperson", 80000, 1),("Lead Engineer", 150000, 2), ("Software Engineer", 120000, 2), ("Account Manager", 160000, 3), ("Accountant", 125000, 3), ("Legal Team Lead", 2500000, 4), ("Lawyer", 190000, 4);

insert into employee (first_name, last_name, role_id, manager_id) values ("Thor", "Odinson", 1, Null), ("Clint", "Barton", 2, 1), ("Peter", "Parker", 3, Null), ("Tony", "Stark", 4, 3), ("Steve", "Rogers", 5, Null), ("Bucky", "Barnes", 6, 5), ("Bruce", "Banner", 7 , Null), ("Natasha", "Romanoff", 8, 7);