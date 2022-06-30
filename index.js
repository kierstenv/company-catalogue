const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const fs = require('fs');
const companyTemplate = require('./src/companyTemplate');

employees = [];
const questions = [
  {
    type: 'list',
    name: 'role',
    message: 'What type of employee would you like to add?',
    choices: ['manager', 'engineer', 'intern'],
  },
  {
    type: 'input',
    name: 'name',
    message(answers) {
      return `What is the ${answers.role}'s name?`;
    },
    validate: (name) => {
      if (name === '') {
        return 'Please enter a name.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'id',
    message(answers) {
      return `What is the ${answers.role}'s ID?`;
    },
    validate: (id) => {
      if (id === '') {
        return 'Please enter an ID.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'email',
    message(answers) {
      return `What is the ${answers.role}'s email address?`;
    },
    validate: (email) => {
      if (email === '') {
        return 'Please enter an email address.';
      }
      return true;
    }
  },
  {
    type: 'number',
    name: 'officeNumber',
    message(answers) {
      return `What is the ${answers.role}'s office number?`;
    },
    when(answers) {
      return answers.role === 'Manager';
    }
  },
  {
    type: 'input',
    name: 'github',
    message(answers) {
      return `What is the ${answers.role}'s GitHub username?`;
    },
    when(answers) {
      return answers.role === 'Engineer';
    }
  },
  {
    type: 'input',
    name: 'school',
    message(answers) {
      return `Where does the ${answers.role} attend school?`;
    },
    when(answers) {
      return answers.role === 'Intern';
    }
  }
];

const init = () => {
  inquirer.prompt(questions).then(answers => {
    const employee = new Employee(answers.name, answers.id, answers.email);
    if (answers.role === 'Manager') {
      employee.officeNumber = answers.officeNumber;
    }
    if (answers.role === 'Engineer') {
      employee.github = answers.github;
    }
    if (answers.role === 'Intern') {
      employee.school = answers.school;
    }
    employees.push(employee);
    init();
  });
}

init();



// const CompanyCreator = require('./lib/CompanyCreator');

// new CompanyCreator();