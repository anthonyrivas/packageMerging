const Person = require('./Person');
class Student extends Person {
  constructor(name, birthday, gender, major) {
    super(name, birthday, gender);
    this.major = major;
    this.knowledge = 0;
  }
  attendClass() {
    this.knowledge++;
  }
}

module.exports = Student;