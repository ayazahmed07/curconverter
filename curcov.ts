import axios from "axios";
import chalk from "chalk";
import inquirer from "inquirer";

const API_KEY = "c6a292310837471588429a6b326972ca"; 
const BASE_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;

async function getExchangeRates() {
    try {
        const response = await axios.get(BASE_URL);
        return response.data.rates;
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        return {};
    }
}

async function main() {
    const exchangeRates = await getExchangeRates();

    const currency: any = {
        Euro: exchangeRates.EUR,
        United_States_Dollar: exchangeRates.USD,
        British_Pound_Sterling: exchangeRates.GBP,
        Indian_Rupee: exchangeRates.INR,
        Pakistani_Rupee: exchangeRates.PKR,
        Japanese_Yen: exchangeRates.JPY,
        Chiness_Yuan: exchangeRates.CHY,
        New_Zealand_Dollar: exchangeRates.NZD,
        South_African_Rand : exchangeRates.ZAR,
        Mexican_Peso: exchangeRates.MXN,

    };

    const userAnswer = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: chalk.blue("Enter from currency"),
            choices: Object.keys(currency),
        },
        {
            name: "to",
            type: "list",
            message: chalk.green("Enter to currency"),
            choices: Object.keys(currency),
        },
        {
            name: "amount",
            type: "input",
            message: chalk.yellow("Please enter your amount",)
        },
    ]);

    const fromAmount = currency[userAnswer.from];
    const toAmount = currency[userAnswer.to];
    const amount = (userAnswer.amount);

    const baseAmount = amount / fromAmount;
    const convertedAmount = baseAmount * toAmount;

    console.log("Converted amount:", convertedAmount);
}

main();
