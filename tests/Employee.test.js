const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('initialization', () => {
    test("should return an the name, id, and email when called with the 'new' keyword", () =>{
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';

      //code under test
      const newEmp = new Employee(name, id, email);

      //verify results
      expect(newEmp.name).toBe(name);
      expect(newEmp.id).toBe(id);
      expect(newEmp.email).toBe(email);
    })
  });

  describe('Get Name', () => {
    test('should return the name of the employee', () => {
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const newEmp = new Employee(name, id, email);

      //code under test
      const result = newEmp.getName();

      //verify
      expect(result).toBe(name);
    })
  });

  describe('Get id', () => {
    test('should return the id of the employee', () => {
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const newEmp = new Employee(name, id, email);

      //code under test
      const result = newEmp.getId();

      //verify
      expect(result).toBe(id);
    })
  });

  describe('Get email', () => {
    test('should return the email of the employee', () => {
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const newEmp = new Employee(name, id, email);

      //code under test
      const result = newEmp.getEmail();

      //verify
      expect(result).toBe(email);
    })
  });

  describe('Get roles', () => {
    test('should return the Employee Role', () => {
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const expectedRole = 'Employee';
      const newEmp = new Employee(name, id, email);

      //code under test
      const result = newEmp.getRole();

      console.log(result);

      //verify
      expect(result).toBe(expectedRole);
    })
  });
})
