import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
    EUR: 0.91,
    USD: 1,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};

let useranswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["EUR", "USD", "GBP", "INR", "PKR"],

    },

    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["EUR", "USD", "GBP", "INR", "PKR"],

    },

    {
        name: "amount",
        type: "number",
        message: "Please enter your amount",
        choices: ["EUR", "USD", "GBP", "INR", "PKR"],

    },

]);


let fromamount = currency [useranswer.from];
let toamount = currency [useranswer.to]
let amount = useranswer.amount
let baseamount = amount / fromamount
let convertedamount = baseamount * toamount
console.log(convertedamount);
console.log(fromamount);
console.log(toamount);
console.log(amount);

