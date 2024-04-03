#!/usr/bin/env node
import inquirer from "inquirer";
const choice = await inquirer.prompt([{
        name: "firstchoice",
        type: "input",
        message: "Enter your 1st choice:",
    },
    {
        name: "secondchoice",
        type: "input",
        message: "Enter your 2nd choice"
    }
]);
if (choice.firstchoice === "rock" && choice.secondchoice === "paper") {
    console.log(`${choice.secondchoice} Wins!!`);
}
else if (choice.firstchoice === "rock" && choice.secondchoice === "scissors") {
    console.log(`${choice.firstchoice} Wins!!`);
}
else if (choice.firstchoice === "paper" && choice.secondchoice === "scissors") {
    console.log(`${choice.secondchoice} Wins!!`);
}
else if (choice.firstchoice === "paper" && choice.secondchoice === "rock") {
    console.log(`${choice.firstchoice} Wins!!`);
}
else if (choice.firstchoice === "scissors" && choice.secondchoice === "rock") {
    console.log(`${choice.secondchoice} Wins!!`);
}
else if (choice.firstchoice === "scissors" && choice.secondchoice === "paper") {
    console.log(`${choice.firstchoice} Wins!!`);
}
