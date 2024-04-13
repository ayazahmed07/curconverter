import axios from "axios";
import chalk from "chalk";
import inquirer from "inquirer";
async function textanimation(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => setTimeout(resolve, 30));
    }
}
async function textanimation_1(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => setTimeout(resolve, 3));
    }
}
const API_KEY = "c6a292310837471588429a6b326972ca";
const BASE_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;
async function getExchangeRates() {
    try {
        const response = await axios.get(BASE_URL);
        return response.data.rates;
    }
    catch (error) {
        console.error("Error fetching exchange rates:", error);
        return {};
    }
}
await textanimation(chalk.bgGray.black.bold.underline("********Currency Converter With Real Time Exchange Rates**********\n"));
async function main() {
    const exchangeRates = await getExchangeRates();
    const currency = {
        Euro: exchangeRates.EUR,
        United_States_Dollar: exchangeRates.USD,
        British_Pound_Sterling: exchangeRates.GBP,
        Pakistani_Rupee: exchangeRates.PKR,
        Japanese_Yen: exchangeRates.JPY,
        South_African_Rand: exchangeRates.ZAR,
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
            message: chalk.yellow("Please enter your amount"),
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
