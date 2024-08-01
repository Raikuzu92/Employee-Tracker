const { prompt } = require("inquirer");
const db = require('./db');

init();


loadMainPrompts();

function loadMainPrompts() {
    prompt 
    {
        type: 'list',
        name: 'license',
        message: questions[5],
        choices: [
            
        ],
        
    }
}