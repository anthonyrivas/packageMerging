const Person = require('./Person.js');
const Teacher = require('./Teacher.js');
const Student = require('./Student.js');
const models = {
  Person: Person,
  Teacher: Teacher,
  Student: Student
};

module.exports = models;