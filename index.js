const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const fs = require('fs');
const companyTemplate = require('./src/companyTemplate');
const generateCatalogue = require('./src/companyTemplate');

managers = [];
engineers = [];
interns = [];

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
    type: 'input',
    name: 'officeNumber',
    message(answers) {
      return `What is the ${answers.role}'s office number?`;
    },
    when(answers) {
      return answers.role === 'manager';
    }
  },
  {
    type: 'input',
    name: 'github',
    message(answers) {
      return `What is the ${answers.role}'s GitHub username?`;
    },
    when(answers) {
      return answers.role === 'engineer';
    }
  },
  {
    type: 'input',
    name: 'school',
    message(answers) {
      return `Where does the ${answers.role} attend school?`;
    },
    when(answers) {
      return answers.role === 'intern';
    }
  },
  {
    type: 'confirm',
    name: 'add',
    message: 'Would you like to add another employee?',
    default: true,
  }
];

const init = () => {
  inquirer.prompt(questions).then(answers => {
    if (answers.role === 'manager') {
      managers.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
    } 
    if (answers.role === 'engineer') {
      engineers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
    } 
    if (answers.role === 'intern') {
      interns.push(new Intern(answers.name, answers.id, answers.email, answers.school));
    }

    if (answers.add) {
    init();
    } else {
      const html = generateCatalogue(managers, engineers, interns);
      fs.writeFile('./dist/company.html', html, (err) => {
        if (err) throw err;
        console.log('Team page created!');
      });
    }
  });
}

init();
