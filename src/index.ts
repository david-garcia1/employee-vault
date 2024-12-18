import inquirer from "inquirer";
import express from "express";
import { connectToDb } from "./connection.js"
import { viewAllDeparments, viewAllRoles, viewEmployees } from "./actions.js";

await connectToDb;

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const startCli = (): void => {
    inquirer
    .prompt([
        {
            type: "list",
            name: "action",
            message: "what would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "change employee role",
            ],
        },
    ])
.then((answers) => {
        if (answers.action === "view all departments") {
          viewAllDeparments(startCli);
        } else if (answers.action === "View all roles") {
            viewAllRoles(startCli);
        } else if (answers.action === "View all employees") {
            viewEmployees(startCli);
        } else if (answers.action === "add a department") {
            
        } else if (answers.action === "add a role") {

        } else if (answers.action === "add an employee") {

        } else if (answers.action === "change employee role") {

        }
    });
};

startCli();