const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('initialization', () => {
    test('should return values of name, id, email, and school', () => {
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const school = 'fakeSchool';

      //code under test
      const newIntern = new Intern(name, id, email, school);

      //verify
      expect(newIntern.name).toBe(name);
      expect(newIntern.id).toBe(id);
      expect(newIntern.email).toBe(email);
      expect(newIntern.school).toBe(school);
    })
  });

  describe('get school', () => {
    test('should return value for school', () => {
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const school = 'fakeSchool';
      const newIntern = new Intern(name, id, email, school);

      //code under test
      const result = newIntern.getSchool();

      //verify
      expect(result).toBe(school);
    })
  });

  describe('get Role', () => {
    test('should return class name', () => {
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const school = 'fakeSchool';
      const expectedRole = 'Intern';
      const newIntern = new Intern(name, id, email, school);

      //code under test
      const result = newIntern.getRole();

      //verify
      expect(result).toBe(expectedRole);
    })
  });
});