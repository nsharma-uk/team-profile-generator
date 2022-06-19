//import dependencies
const inquirer = require("inquirer");
const path = require("path");
const chalk = require("chalk");

//import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//import questions
const {
  //teamNameQuestions,
  managerQuestions,
  selectEmployeeQuestion,
  engineerQuestions,
  internQuestions,
  //fileName,
} = require("./utils/questions");

//import answers
//const getAnswers = require("./utils/getAnswers");

//const generateHtml = require("./utils/generateHTML");

//import write to file function
//const writeToFile = require("./utils/writeToFile");


//initialise questions
const init = async () => {
  console.log(chalk.cyan("Welcome to the team profile generator"));

    let inProgress = true;

    const engineerInfo = [];
    const internInfo = [];

    const managerAnswers = await inquirer.prompt(managerQuestions);

    const manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.office,
      managerAnswers.team
    );

    while (inProgress) {
      const { selectEmployee } = await inquirer.prompt(selectEmployeeQuestion);

      //if statements
      if (selectEmployee === "engineer") {
        const engineerAnswers = await inquirer.prompt(engineerQuestions);

        const engineer = new Engineer(
          engineerAnswers.name,
          engineerAnswers.id,
          engineerAnswers.email,
          engineerAnswers.github
        );

        engineerInfo.push(engineer);
        console.log(engineerAnswers);

      } else if (selectEmployee === "intern") {
        const internAnswers = await inquirer.prompt(internQuestions);

        const intern = new Intern(
          internAnswers.name,
          internAnswers.id,
          internAnswers.email,
          internAnswers.school
        );
        internInfo.push(intern);
        console.log(internAnswers);

      } else {
        inProgress=false;
      }
    }
  };
console.log(init)

// const fileName = [
//   {
//     type: "input",
//     name: "filename",
//     message:
//       "What would you like to name your html file?  Please provide the file name only, without the .html extension:",
//     default: "My Team",
//   },
// ];
// console.log(fileName);

//const generatedHtml = generateHtml(teamName, manager, engineerInfo, internInfo);

// writeToFile(fileName, generatedHtml);

// {
//   //write to file
//   writeToFile(path.join(__dirname, "../dist/index.html"), html);
//   console.log("Your Team Profile has been created");
// }
//};

init();
