//import dependencies and files
const inquirer = require("inquirer");
const path = require("path");

const Team = require("./lib/Team");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const {
    teamNameQuestions,
    managerQuestions,
    selectEmployee,
    engineerQuestions,
    internQuestions,
    addAnother,
    fileName,
  } = require ("./utils/questions");

  const getAnswers = require("./utils/getAnswers");

  const generateHtml = require("./utils/generateHTML");

  const writeToFile = require ("./utils/writeToFile");

