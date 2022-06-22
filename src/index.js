//import dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const chalk = require("chalk");

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

const generateHtml = require("./utils/generateHtml");
const { writeToFile } = require("./utils/writeToFile");

//credit for init function code syntax - https://github.com/C-Sim

//initialise questions
const init = async () => {
  console.log(chalk.cyan("Welcome to the team profile generator"));

  let inProgress = true;

  const engineers = [];
  const interns = [];

  //ask team name

  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.office,
    managerAnswers.team
  );

  // engineers.push(manager);

  while (inProgress) {
    const { select } = await inquirer.prompt(selectEmployeeQuestion);

    //prompt questions and get answer - add an engineer
    if (select === "engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);

      const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
      );

      engineers.push(engineer);
    } else if (select === "intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      const intern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );
      interns.push(intern);
    } else {
      inProgress = false;
    }
  }

  const generatedHtml = generateHtml(manager, engineers, interns);

  writeToFile(path,generatedHtml);
  console.log(
    chalk.green(
      "Your html file has been created and you can now open your html file"
    )
  );
  //open(`file://${absolutePath}`, { app: "chrome" });
};

init();
