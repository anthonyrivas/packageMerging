// const models = require('./models');
const {Person, Teacher, Student} = require('./models');

const aRivas = new Teacher('Anthony Rivas', '08/30/1991', 'male', 'Computer Science');

const zSmith = new Student('Zane Smith', '01/01/1994', 'Male', 'Computer Information Systems');

aRivas.addStudent(zSmith);

aRivas.greet();
zSmith.greet();

console.log(aRivas);
console.log(zSmith);