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
  // {
  //   type: 'input',
  //   name: 'ID',
  //   message: 'Enter Employee ID: ',
  // },
  // {
  //   type: 'input',
  //   name: 'Name',
  //   message: 'Enter Employee Email: ',
  // },
  // {
  //   type: 'input',
  //   name: 'Name',
  //   message: 'Enter Additional Info: ',
  // },
]

let responses = {};
let allWorkers = [];

function chooseOption() {
  inquirer.prompt(options).then(answer => {
    let chosenOption = answer['Actions'];
    if (chosenOption === 'add') {
      addEmployee();
    } else if (chosenOption === 'create') {
      writeToDb();
      replaceTemplate();

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
    allWorkers.push(Object.assign({}, responses));
    // console.log(allWorkers);
    chooseOption();
    return;
  }

  inquirer.prompt(currentQuestion).then(answer => {
    let keyVal = currentQuestion.name;
    console.log(answer[keyVal]);
    if (answerChecks(answer[keyVal]) === false){
      promptQuestions(index);
      return;
    }

    responses[keyVal] = answer[keyVal];
    promptQuestions(index + 1);
  });
}

function writeToDb() {
  fs.writeFileSync('./db/db.json', JSON.stringify(allWorkers));
  let db = fs.readFileSync('./db/db.json', 'utf-8');
}

function replaceTemplate() {
  let db = fs.readFileSync('./db/db.json', 'utf-8');
  dbArray = JSON.parse(db);
  // console.log(dbArray);
  // console.log(typeof dbArray);
  dbArray.forEach(element => {
    // console.log(element);
    parseInfo(element);

  });
}

function parseInfo(object) {
  let empName = object['Name'];
  let empPos = object['Position'];
  console.log(empName,empPos);
}

//check for empty string and check for esc
function answerChecks(answerToCheck) {
  if (answerToCheck === 'esc') {
    process.exit();
  } else if (answerToCheck.trim().length === 0) {
    return false;
  }
}


function init() {
  chooseOption();
}

init();