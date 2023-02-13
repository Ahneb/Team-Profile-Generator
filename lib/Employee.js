//employee class needs the following
//name
//id
//email
//getName()
//getId()
//getEmail()
//getRoles()

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  };

  getName() {
    return this.name;
  };

  getId() {
    return this.id;
  };

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.constructor.name;
  }

}

module.exports = Employee;