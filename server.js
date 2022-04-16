const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const teamGen = require("./src/teamGen");
const fs = require("fs");


const teamMembers = []

async function managerPrompt() {
  const manager = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the managers name?",
    },
    {
      type: "input",
      name: "id",
      message: "what is the managers id?",
    },
    {
      type: "input",
      name: "email",
      message: "what is the managers email?"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "what is the mangers office number?",
    }

  ]);
  const tempManager = new Manager(manager.name,manager.id,manager.email,manager.officeNumber)
  teamMembers.push(tempManager)
  menu()
}
managerPrompt()


async function engineerPrompt() {
  const engineer = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineers name?",
    },
    {
      type: "input",
      name: "id",
      message: "what is the engineers id?",
    },
    {
      type: "input",
      name: "email",
      message: "what is the engineers email?"
    },
    {
      type: "input",
      name: "github",
      message: "what is the engineers github?",
    }

  ]);
  const tempEngineer = new Engineer(engineer.name,engineer.id,engineer.email,engineer.github)
  teamMembers.push(tempEngineer)
  menu()
}
async function internPrompt() {
  const intern = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the interns name?",
    },
    {
      type: "input",
      name: "id",
      message: "what is the interns id?",
    },
    {
      type: "input",
      name: "email",
      message: "what is the interns email?"
    },
    {
      type: "input",
      name: "school",
      message: "what is the interns school?",
    }

  ]);
  const tempIntern = new Intern(intern.name,intern.id,intern.email,intern.school)
  teamMembers.push(tempIntern)
  menu()
}
async function menu(){
  const userChoice = await inquirer.prompt([
    {
      type:"list",
      name:"menu",
      message:"what would you like to create next?",
      choices:["Intern","Engineer","none"]
    }


  ]) 
  switch(userChoice.menu){
    case "Intern":
        internPrompt()
        break
    case "Engineer":
        engineerPrompt()
        break
    default:
      generateTeam()
  }
}
async function generateTeam(){
  const html=teamGen(teamMembers)
fs.writeFileSync("dist/index.html",html)
}
