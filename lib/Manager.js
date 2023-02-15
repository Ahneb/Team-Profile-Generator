const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);

    this.office = office;
  };

  getOffice() {
    let newphrase = `Office: ${this.office}`;
    return this.office;
  };

  getRole(){
    return this.constructor.name;
  };
}

module.exports = Manager;