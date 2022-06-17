//Import chalk (colour styling )
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
    validate: (answer) => {
      if (answer.length <= 0 || !isNaN) {
        return chalk.yellow("A valid office number is required");
      }
      return true;
    },
  },
];
