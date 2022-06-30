class Employee {
  constructor(name = '', email = '') {
    this.name = name;
    this.id = Employee.getNextId();
    this.email = $(this.name).toLowerCase() + '@cc.co';
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }

  static getNextId() {
    return ++nextId;
  }
}

module.exports = Employee;