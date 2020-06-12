const Person = require('./Person');
const Student = require('./Student');
class Teacher extends Person {
  constructor(name, birthday, gender, field) {
    super(name, birthday, gender);
    this.field = field;
    this.fulfillment = 0;
    this.students = [];
  }
  addStudent(student) {
    if( student instanceof Student) {
      this.students.push(student);
    } else {
      console.log('Student could not be added', student);
    }
  }
  teachClass() {
    this.fulfillment += this.students.length;
  }
}

module.exports = Teacher;