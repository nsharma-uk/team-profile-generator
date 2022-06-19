//Import chalk (color styling for CLI)
const chalk = require("chalk");

//Import email validator
const validator = require("email-validator");

//Questions
const teamNameQuestions = [
  {
    type: "input",
    name: "team",
    message: "Please enter the team name:",
    default: "My Team",
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

//manager questions and answers

const managerQuestions = [
  {
    type: "input",
    message: "Please enter the manager's name:",
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
    // validate: (answer) => {
    //   answer && !isNaN(answer)
    //     ? true
    //     : chalk.yellow("A valid employee ID number is required.");
    // },
  },
  {
    type: "input",
    message: "Please enter the manager's email:",
    name: "email",
    validate: (email) => {
      if (email.length < 1 || !validator.validate(email)) {
        return chalk.yellow(
          "A valid answer is required.  Please enter the manager's email."
        );
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter the manager's office number",
    name: "office",
    default: "123",
    // validate: (answer) => {
    //   if (answer.length <= 0 || !isNaN(answer)) {
    //     return chalk.yellow("A valid office number is required");
    //   }
    //   return true;
    // },
  },
];

//select type of employee
const selectEmployeeQuestion = [
  {
    type: "list",
    message: "Would you like to add an Engineer or Intern to the team?",
    name: "select",
    choices: [
      {
        name: "Engineer",
        value: "engineer",
        short: "eng",
      },
      {
        name: "Intern",
        value: "intern",
        short: "eng",
      },
      {
        name: "No, my team is complete ",
      },
    ],
  },
];

//engineer questions and answers

const engineerQuestions = [
  {
    type: "input",
    message: "Please enter the engineer's name:",
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
      if (answer.length <= 0 || !isNaN(answer)) {
        return chalk.yellow("A valid employee ID number is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter the intern's employee id:",
    name: "id",
    validate: (answer) => {
      answer && !isNaN(answer)
        ? true
        : chalk.yellow("A valid employee ID number is required:");
    },
  },
  {
    type: "input",
    message: "Please enter the engineer's email:",
    name: "email",
    validate: (email) => {
      if (email.length < 1 || !validator.validate(email)) {
        return chalk.yellow(
          "A valid answer is required.  Please enter the engineer's email:"
        );
      }
      return true;
    },
  },
];

//intern questions and answers
const internQuestions = [
  {
    type: "input",
    message: "Please enter the intern's name:",
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
      answer && !isNaN(answer)
        ? true
        : chalk.yellow("A valid employee ID number is required:");
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
  {
    type: "input",
    message: "Please enter the intern's email:",
    name: "email",
    validate: (email) => {
      if (email.length < 1 || !validator.validate(email)) {
        return chalk.yellow(
          "A valid answer is required.  Please enter the intern's email:"
        );
      }
      return true;
    },
  },
];

module.exports = {
  teamNameQuestions,
  managerQuestions,
  selectEmployeeQuestion,
  engineerQuestions,
  internQuestions,
};
