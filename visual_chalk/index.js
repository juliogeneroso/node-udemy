const chalk = require('chalk');

message_approved = 'Parabéns! Você está aprovado'
message_disapproved = 'Você está na prova de recuperação'
n_school = 7;

// Ternary IF

n_school >= 7 ? approved():disapproved()

// Normal if : 

if(n_school>=7)
    approved()
else
    disapproved()

    
function approved(){
    console.log(chalk.green(message_approved))
}
function disapproved(){
    console.log(chalk.red(message_disapproved))
}
