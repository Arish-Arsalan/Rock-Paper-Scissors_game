#! /usr/bin/env node

import inquirer from "inquirer";

async function playGame() {
    let cpuI = Math.floor(Math.random() * 3);
    let cpu = ["Rock", "Paper", "Scissors"][cpuI];

    let user = await inquirer.prompt({
        name: "prompt",
        type: "list",
        choices: ["Rock", "Paper", "Scissors"],
    });

    console.log(`CPU is: ${cpu}`);
    console.log(`User is: ${user.prompt}`);

    if (cpu === user.prompt) {
        console.log("The game has tied");
    } else if (
        (cpu === "Rock" && user.prompt === "Scissors") ||
        (cpu === "Paper" && user.prompt === "Rock") ||
        (cpu === "Scissors" && user.prompt === "Paper")
    ) {
        console.log("The winner is CPU");
    } else {
        console.log("The winner is User");
    }
}

playGame();
