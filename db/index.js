const pool = require('./connection');

class DB {
  constructor() { }

  async query(sql, args = []) {
    const client = await pool.connect();
    try {
      const result = await client.query(sql, args);
      return result;
    } finally {
      client.release();
    }

  }
  updateEmployee() {
    return this.query("UPDATE employee SET first_name = 'NewName' WHERE id = 1");
  }
  addDepartment() {
    return this.query("INSERT INTO department_name VALUES ('New Department')");
  }
  viewRoles() {
    return this.query("SELECT employee.first_name, employee.last_name, roles.title FROM employee JOIN roles ON employee.role_id = roles.id");
  }
  viewAllDepartments() {
    return this.query("SELECT department_name FROM department");
  }
  addDepartment() {
    return this.query("INSERT INTO department (name) VALUES ('New Department')");
  }
  addEmployee() {
    return this.query("INSERT INTO employee (first_name, last_name) VALUES ('John', 'Doe')");
  }
  findAllEmployees() {
    return this.query("SELECT employee.first_name, employee.last_name, roles.title FROM employee JOIN roles ON employee.role_id = roles.id");
  }
}


module.exports = new DB()