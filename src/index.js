//import dependencies
const inquirer = require("inquirer");
//const path = require("path");
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
  //fileName,
} = require("./utils/questions");

//import answers
//const getAnswers = require("./utils/getAnswers");

const generateHtml = require("./utils/generateHTML");

//import write to file function
//const writeToFile = require("./utils/writeToFile");

//initialise questions
const init = async () => {
  console.log(chalk.cyan("Welcome to the team profile generator"));

  let inProgress = true;

  const engineers = [];
  const interns = [];

  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.office,
    managerAnswers.team
  );

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
};



//writeToFile(fileName, generatedHtml);

{
  //write to file
//  writeToFile(path.join(__dirname, "../dist/index.html"), html);
  console.log("Your Team Profile has been created and your html file is ready.");
}

init();
