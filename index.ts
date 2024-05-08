#! /usr/bin/env node
import inquirer from "inquirer"


const Currency: any = {
    USD: 1, // Base currency
    EUR: 0.93,
    GBP: 0.80,
    INR: 83.48,
    PKR: 280
};

let user_answer = await inquirer.prompt(
 [
    {
    name: "from",
    message: "Enter To Curreny",
    type: 'list',
    choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
   {
    name: "to",
    message: "Enter From Curreny",
    type: 'list',
    choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']
   },
   {
     name: 'amount',
     message: "Enter Your Account",
     type: 'number'
   }
  ]
)


let fromAmount = Currency[user_answer.from] // exchange rate                
let toAmount = Currency[user_answer.to] // exchange rate 
let amount = user_answer.amount
let baseAmount = amount / fromAmount // usd base currency // 4
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);





              