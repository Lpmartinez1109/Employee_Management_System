drop database if exists employee_db;

create database employee_db;

use employee_db;

create table department (
    id int not null auto_increment primary key;
    name varchar(30) not null
);

create table role (
    id int not null auto_increment primary key,
    title varchar(30) unique not null,
    salary decimal unsigned not null,
    department_id int unsigned not null
);

create table employee (
    id int not null auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int unot null,
    manager_id int not null
)
    