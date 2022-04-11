const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

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
}
managerPrompt()


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
     //change office number to git hub for engineer
    }

  ]);