//Import chalk (colour styling for CLI)
const chalk = require("chalk");

//Import email validator
const validator = require("email-validator");

//Questions

const teamNameQuestions = [
  {
    type: "input",
    name: "team",
    message: "Please enter the team name:",
    validate: (answer) => {
      if (answer.length < 1) {
        return chalk.yellow(
          "A valid answer is required.  Please input a team name"
        );
      }
      return true;
    },
  },
];

//manager questions
const managerQuestions = [
  {
    type: "input",
    message: " Please enter the manager's name:",
    name: "name",
    validate: (answer) => {
      if (answer.length < 1) {
        return chalk.yellow(
          "A valid answer is required.  Please input the manager's name"
        );
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter the manager's employee id:",
    name: "id",
    validate: (answer) => {
      if (answer.length <= 0 || !isNaN) {
        return chalk.yellow("A valid employee ID number is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter the manager's email:",
    name: "email",
    validate: (answer) => {
      if (answer.length < 1) {
        return chalk.yellow(
          "A valid answer is required.  Please enter the manager's email:"
        );
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Enter the manager's office number",
    name: "officeNumber",
    default: "123",
    validate: (answer) => {
      if (answer.length <= 0 || !isNaN) {
        return chalk.yellow("A valid office number is required");
      }
      return true;
    },
  },
];

//select type of employee
const selectEmployee = [
  {
    type: "list",
    message: "Would you like to add an Engineer or Intern to the team?",
    name: "select",
    choices: ["Engineer", "Intern", "None"],
  },
];

//engineer questions
const engineerQuestions = [
  {
    type: "input",
    message: " Please enter the engineer's name:",
    name: "name",
    validate: (answer) => {
      if (answer.length < 1) {
        return chalk.yellow(
          "A valid answer is required.  Please input the engineer's name"
        );
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter the engineer's employee id:",
    name: "id",
    validate: (answer) => {
      if (answer.length <= 0 || !isNaN) {
        return chalk.yellow("A valid employee ID number is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter the engineer's github username:",
    name: "github",
    validate: (answer) => {
      if (answer.length < 1) {
        return chalk.yellow(
          "A valid answer is required.  Please enter the engineer's github username:"
        );
      }
      return true;
    },
  },
];

const internQuestions = [
  {
    type: "input",
    message: " Please enter the intern's name:",
    name: "name",
    validate: (answer) => {
      if (answer.length < 1) {
        return chalk.yellow(
          "A valid answer is required.  Please input the intern's name:"
        );
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter the intern's employee id:",
    name: "id",
    validate: (answer) => {
      if (answer.length <= 0 || !isNaN) {
        return chalk.yellow("A valid employee ID number is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter name of the intern's school:",
    name: "school",
    validate: (answer) => {
      if (answer.length < 1) {
        return chalk.yellow(
          "A valid answer is required.  Please enter name of the intern's school:"
        );
      }
      return true;
    },
  },
];

const addAnother = [
  {
    type: "confirm",
    message: "Do you want to add another employee?",
    name: "addEmployee",
  },
];

const fileName = [
  {
    type: "input",
    name: "filename",
    message:
      "What would you like to name the file?  Please provide the file name only, without the extension:",
    default: "team-profile",
  },
];

module.exports = {
  teamNameQuestions,
  managerQuestions,
  selectEmployee,
  engineerQuestions,
  internQuestions,
  addAnother,
  fileName,
};
