import { pool } from "./connection.js";
import Table from 'cli-table3';
// import inquirer from "inquirer";
export const viewAllDeparments = (startCli) => {
    pool.query('SELECT id, department_name AS name FROM department', (err, result) => {
        if (err) {
            console.log('error viewing departments');
            startCli();
        }
        else if (result) {
            const table = new Table({
                head: ["ID", "Name"],
                colWidths: [5, 20],
            });
            result.rows.forEach((row) => {
                table.push(row.id, row.name);
            });
            console.log(table.toString());
            startCli();
        }
    });
};
export const viewAllRoles = (startCli) => {
    pool.query(`SELECT id, title, department_id AS department, salary FROM roles`, (err, result) => {
        if (err) {
            console.log("error viewing departments");
            startCli();
        }
        else if (result) {
            const table = new Table({
                head: ["ID", "Title", "Department", "Salary"],
                colWidths: [5, 20, 15, 10],
            });
            result.rows.forEach((row) => {
                table.push([row.id, row.title, row.department, row.salary]);
            });
            console.log(table.toString());
            startCli();
        }
    });
};
export const viewEmployees = (startCli) => {
    pool.query(`SELECT
             employee.id, 
             employee.first_name, 
             employee.last_name,
              roles.title, roles.salary, 
              department.department_name 
              AS
               department, 
                COALESCE(employee.first_name || ' ' || employee.last_name, 'None') AS manager
              
              FROM 
              employee 
             JOIN
              roles ON employee.role_id = roles.id 
            JOIN
             department ON roles.department_id = department.id
             
             `, (err, result) => {
        if (err) {
            console.log("error viewing employess");
            startCli();
        }
        else if (result) {
            const table = new Table({
                head: [
                    "ID",
                    "First Name",
                    "Last Name",
                    "Title",
                    "Department",
                    "Salary",
                    "Manager",
                ],
                colWidths: [5, 15, 15, 20, 15, 15, 15],
            });
            result.rows.forEach((row) => {
                table.push([
                    row.id,
                    row.first_name,
                    row.last_name,
                    row.title,
                    row.department,
                    row.salary,
                    row.manager,
                ]);
            });
            console.log(table.toString());
            startCli();
        }
    });
};
