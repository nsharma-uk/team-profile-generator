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
  managerQuestions,
  selectEmployee,
  engineerQuestions,
  internQuestions,
  addAnother,
  // fileName,
} = require("./utils/questions");

//import answers
const getAnswers = require("./utils/getAnswers");

const { generateHtml, wholeHtmlPage } = require("./utils/generateHTML");

//import write to file function
const writeToFile = require("./utils/writeToFile");

//init function
const init = async () => {
  //start the questions
  let inProgress = true;

  //empty object which the answers will get pushed too
  const teamMembers = { interns: [], engineers: [] };

  const { team } = await inquirer.prompt(teamNameQuestions);

  const { name, id, email, office } = await inquirer.prompt(managerQuestions);

  const manager = new Manager(name, id, email, office);

  teamMembers.manager = manager;

  //while loop

  while (inProgress) {
    const { employeeRole } = await inquirer.prompt(selectEmployee);

    //if statements
    if (employeeRole == "Engineer") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer(name, id, email, github);
      teamMembers.engineers.push(engineer);
    }
    if (employeeRole == "Intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );

      const intern = new Intern(name, id, email, school);

      teamMembers.interns.push(intern);
    }
    const addNewPerson = await inquirer.prompt(addAnother);

    if (!addNewPerson.addEmployee) {
      inProgress = false;
    }
  }
  if (!inProgress) {
    const newHTMLPage = generateHtml(team, teamMembers);
    const html = wholeHtmlPage(newHTMLPage);
    console.log(newHTMLPage);
    //write to file
    writeToFile(path.join(__dirname, "../dist/index.html"), html);
    console.log("Your Team Profile has been created");
  }
};

//make sure to call the initialise otherwise your code won't run
init();
