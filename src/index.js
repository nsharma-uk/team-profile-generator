//import dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const chalk = require("chalk");
const open = require("open");

//import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const {
  managerQuestions,
  selectEmployeeQuestion,
  engineerQuestions,
  internQuestions,
} = require("./utils/questions");

const generateHtml = require("./utils/generate");
const writeToFile = require("./utils/writeToFile");

//initialize questions
const init = async () => {
  console.log(chalk.cyan("Welcome to the team profile generator"));

  let inProgress = true;

  const engineers = [];
  const interns = [];

  //prompt questions and get answer - manager
  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(managerAnswers);
  // manager.push(manager);

  while (inProgress) {
    
    const { select } = await inquirer.prompt(selectEmployeeQuestion);

    //prompt questions and get answer - add an engineer
    if (select === "engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
       
      const engineer = new Engineer(engineerAnswers);
      
      engineers.push(engineer);

    } else if (select === "intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      const intern = new Intern(internAnswers);

      interns.push(intern);
    } else {
      inProgress = false;
    }
  }

  const generatedHtml = generateHtml(manager, engineers, interns);

  const filePath = path.join(__dirname, "../", "index.html");

  writeToFile(filePath, generatedHtml);
  console.log(
    chalk.green(
      "Your html file has been created and you can now open your html file"
    )
  );

  open("http://127.0.0.1:5501/index.html", { app: "chrome" });
};

init();
