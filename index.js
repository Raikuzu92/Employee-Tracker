const inquirer = require("inquirer");
const db = require('./db');

init();

function init() {
    loadMainPrompts();
}

function loadMainPrompts() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Which selection would you like to run?',
            choices: [
                { name: 'View all departments', value: 'VIEW_DEPARTMENTS' },
                { name: 'View all roles', value: 'VIEW_ROLES' },
                { name: 'View all employees', value: 'VIEW_EMPLOYEES' },
                { name: 'Add a department', value: 'ADD_DEPARTMENT' },
                { name: 'Add a role', value: 'ADD_ROLE' },
                { name: 'Add an employee', value: 'ADD_EMPLOYEE' },
                { name: 'Update an Employee', value: 'UPDATE_EMPLOYEE' },
                { name: 'Exit App', value: 'QUIT' }
            ]
        }
    ]).then((res) => {
        console.log(res);
        switch (res.options) {
            case 'VIEW_DEPARTMENTS':
                viewAllDepartments();
                break;
            case 'VIEW_ROLES':
                viewRoles();
                break;
            case 'VIEW_EMPLOYEES':
                findAllEmployees();
                break;
            case 'ADD_DEPARTMENT':
                addDepartment();
                break;
            case 'ADD_ROLE':
                addRole();
                break;
            case 'ADD_EMPLOYEE':
                addEmployee();
                break;
            case 'UPDATE_EMPLOYEE':
                updateEmployee();
                break;
            default:
                console.log('Quit');
        }
    });
}

function findAllEmployees() {
    const query = "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        loadMainPrompts();
    });
}

function updateEmployee() {
    const query = "UPDATE employee SET first_name = 'NewName' WHERE id = 1";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.log("Employee updated successfully.");
        loadMainPrompts();
    });
}

function viewRoles() {
    const query = "SELECT employee.first_name, employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        loadMainPrompts();
    });
}

function updateRoles() {
    const query = "UPDATE roles SET role_title = 'NewTitle' WHERE role_id = 1";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.log("Role updated successfully.");
        loadMainPrompts();
    });
}

function viewAllDepartments() {
    const query = "SELECT id, name FROM department";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        loadMainPrompts();
    });
}

function addDepartment() {
    const query = "INSERT INTO department (name) VALUES ('New Department')";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.log("New department added successfully.");
        loadMainPrompts();
    });
}

function addEmployee() {
    const query = "INSERT INTO employee (first_name, last_name) VALUES ('John', 'Doe')";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.log("New employee added successfully.");
        loadMainPrompts();
    });
}
