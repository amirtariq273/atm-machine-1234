#! /usr/bin/env node

import inquirer from "inquirer";


let myBalance = 10000; // Dollar
let myPin = 1234;
const withdrawlOptions = [1000, 3000, 5000, 7000, 10000, 12000, 15000];


let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
        },
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operatorAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "check balance"]
            }
        ]
    );
    console.log(operatorAns);


    if (operatorAns.operation === "withdraw") {

        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Select your amount",
                    type: "list",
                    choices: withdrawlOptions
                }
            ]
        )
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`your remaning balance is: " ${myBalance}`);

        }
        else {
            console.log("Insufficient funds. Please select a lower amount.");
        }
    }
    else if (operatorAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);

    }

} else {
    console.log("incorrect pin code!!!");
}






