//import dependencies
const inquirer = require("inquirer");
//const path = require("path");

//import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//import questions
const {
  teamNameQuestions,
  createNewManager,
  employeeRole,
  createNewEngineer,
  createNewIntern,
  //addAnother,
  //fileName,
} = require("./utils/questionsAndAwaitAnswers");

//import answers
const getAnswers = require("./utils/getAnswers");

const generateHtml = require("./utils/generateHTML");

//import write to file function
const writeToFile = require("./utils/writeToFile");
const chalk = require("chalk");

const addAnotherEmployee = async () => {
  const addAnother = [
    {
      type: "confirm",
      message: "Do you want to add another employee?",
      name: "addEmployee",
      default: true,
    },
  ];
  const anotherEmployee = await getAnswers(addAnother);
  return anotherEmployee;
};

console.log(addAnotherEmployee);
const fileName = [
  {
    type: "input",
    name: "filename",
    message:
      "What would you like to name your html file?  Please provide the file name only, without the .html extension:",
    default: "My Team",
  },
];
console.log(fileName);

//get whole team
const getWholeTeam = async () => {
  //empty object which the answers will get pushed too
  const teamMembers = [];

  let inProgress = true;

  while (inProgress) {
    const { employeeType } = await employeeRole();

    //if statements
    if (employeeType == "engineer") {
      const engineer = await createNewEngineer();
      teamMembers.push(engineer);
    }

    if (employeeType == "intern") {
      const intern = await createNewIntern();
      teamMembers.push(intern);
    } else employeeType == "none";
    {
      inProgress = false;
    }
  }
};

const init = async () => {
  chalk.cyan("Welcome to the team profile generator");

  const teamName = (await getAnswers(teamNameQuestions)).team;

  const manager = await createNewManager();

  const allTeamMembers = await getWholeTeam();

  //const generatedHtml = generateHtml(teamName, manager, teamMembers);

  // writeToFile(fileName, generatedHtml);

  // {
  //   //write to file
  //   writeToFile(path.join(__dirname, "../dist/index.html"), html);
  //   console.log("Your Team Profile has been created");
  // }
};

init();
