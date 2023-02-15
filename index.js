const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


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
  {
    type: 'input',
    name: 'ID',
    message: 'Enter Employee ID: ',
  },
  {
    type: 'input',
    name: 'Email',
    message: 'Enter Employee Email: ',
  },
  {
    type: 'input',
    name: 'Info',
    message: 'Enter Additional Info: ',
  },
]

let responses = {};
let allWorkers = [];
let newhtml = '';

function chooseOption() {
  inquirer.prompt(options).then(answer => {
    let chosenOption = answer['Actions'];
    if (chosenOption === 'add') {
      addEmployee();
    } else if (chosenOption === 'create') {
      fs.writeFileSync('./db/db.json', JSON.stringify(allWorkers));
      // console.log(newhtml);
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
    // console.log(responses);

    if (responses.Position === "Manager") {
      let newMan = new Manager(responses.Name, responses.ID, responses.Email, responses.Info);
      // console.log(newMan);
      allWorkers.push(newMan);
      writeHTML(responses);
    } else if (responses.Position === "Engineer") {
      let newEng = new Engineer(responses.Name, responses.ID, responses.Email, responses.Info);
      // console.log(newEng);
      allWorkers.push(newEng);
      writeHTML(responses);
    } else if (responses.Position === "Intern") {
      let newInt = new Intern(responses.Name, responses.ID, responses.Email, responses.Info);
      // console.log(newInt);
      allWorkers.push(newInt);
      writeHTML(responses);
    }

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

// function writeToDb() {
//   fs.writeFileSync('./db/db.json', JSON.stringify(allWorkers));
// }

function replaceTemplate() {
  let template = fs.readFileSync('./public/template.html', 'utf-8');
  // console.log(template);
  template = template.replace('{card_info}', newhtml);

  fs.writeFileSync('./public/result.html', template);
}

function writeHTML(obj){
  console.log(obj.Name, obj.ID, obj.Email, obj.Info, obj.Position);
  let newtext = `
    <div class="card">
      <div class="name">
        <h1 class="name_tag">${obj.Name}</h1>
        <h2 class="position_tag">${obj.Position}</h2>
      </div>
      <div class="info_container">
        <div class="info">
          <div class="employee_id">ID: ${obj.ID}</div>
          <div class="employee_email">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${obj.Email}">Email: ${obj.Email}</a>
          </div>
          <div class="employee_extra">${obj.Info}</div>
        </div>
      </div>
        
    </div>
  `;
  
  newhtml = `
  ${newhtml}
  ${newtext}
  `
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