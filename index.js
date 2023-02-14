const inquirer = require('inquirer');
const fs = require('fs');


const options = [
  {
    type: 'list',
    name: 'Actions',
    message: 'What do you want to do? ',
    //allow for different values in case we need the change later
    choices: [
      {value: 'add',name: 'Add Employee'},
      {value: 'create',name: 'Create Html'},
      {value: 'exit',name: 'exit'},
    ]
  },
]

const questions = [
  {
    type: 'input',
    name: 'Name',
    message: 'Enter Employee Name: ',
  },
  {
    type: 'list',
    name: 'Position',
    message: 'Employee Position: ',
    //allow for different values in case we need the change later
    choices: [
      {value: 'Manager', name: 'Manager'},
      {value: 'Engineer', name: 'Engineer'},
      {value: 'Intern', name: 'Intern'},
    ]
  },
]

let responses = {};

function chooseOption() {
  inquirer.prompt(options).then(answer => {
    let chosenOption = answer['Actions'];
    if (chosenOption === 'add') {
      addEmployee();
    } else if (chosenOption === 'create') {
      console.log('we create!');
    } else {
      process.exit();
    }
  })
}

function addEmployee() {
  console.log('Type esc to exit the program at anytime');
  promptQuestions(0);
}

// function to prompt questions
function promptQuestions(index) {
  let currentQuestion = questions[index];
  //check if all questions have been asked
  if (index >= questions.length) {
    //call function to process data into an html page
    console.log(responses);
    console.log('questions over');
    chooseOption();
    return;
  }

  inquirer.prompt(currentQuestion).then(answer => {
    let keyVal = currentQuestion.name;
    answerChecks(answer[keyVal],index);
    responses[currentQuestion.name] = answer[keyVal];
    promptQuestions(index + 1);
  });
}

// function to repeat question given a condition
function answerChecks(answerToCheck, index) {
  if (answerToCheck === 'esc') {
    process.exit();
  } else if (!answerToCheck.trim()) {
    console.log("Answer cannot be empty. Please enter a valid answer.");
    promptQuestions(index);
    return;
  }
}
// store all entries into a db
// generate an html with all entries

function init() {
  chooseOption();
}

init();