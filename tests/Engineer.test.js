const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('initialization', () => {
    test('should return an the name, id, email, and github', () => {
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const github = 'GithubUser';

      //code under test
      const newEng = new Engineer(name, id, email, github);

      //verify
      expect(newEng.name).toBe(name);
      expect(newEng.id).toBe(id);
      expect(newEng.email).toBe(email);
      expect(newEng.github).toBe(github);
    })
  });

  describe('get github username', () => {
    test('should return the github username that is passed into engineer object', () => {
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const github = 'GithubUser';
      const newEng = new Engineer(name, id, email, github);
      
      //code under test
      const result = newEng.getGithub();

      //verify
      expect(result).toBe(github);
    })
  });

  describe('get github username', () => {
    test('should return the github username that is passed into engineer object', () => {
      //setup
      const name = 'Joe';
      const id = '1';
      const email = 'test@test.com';
      const github = 'GithubUser';
      const expectedRole = 'Engineer';
      const newEng = new Engineer(name, id, email, github);
      
      //code under test
      const result = newEng.getRole();

      //verify
      expect(result).toBe(expectedRole);
    })
  });


})