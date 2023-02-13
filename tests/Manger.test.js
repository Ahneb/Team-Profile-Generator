const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('initialization', () => {
    test('should return values of name, id, email, and office number', () => {
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const office = 10;

      //code under test
      const newMan = new Manager(name, id, email, office);

      //verify
      expect(newMan.name).toBe(name);
      expect(newMan.id).toBe(id);
      expect(newMan.email).toBe(email);
      expect(newMan.office).toBe(office);
    })
  });

  describe('get office number', () => {
    test('should return value for office', () => {
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const office = 10;
      const newMan = new Manager(name, id, email, office);

      //code under test
      const result = newMan.getOffice();

      //verify
      expect(result).toBe(office);
    })
  });

  describe('get Role', () => {
    test('should return class name', () => {
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const office = 10;
      const expectedRole = 'Manager';
      const newMan = new Manager(name, id, email, office);

      //code under test
      const result = newMan.getRole();

      //verify
      expect(result).toBe(expectedRole);
    })
  });
});