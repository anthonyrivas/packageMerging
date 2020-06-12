class Person {
  constructor(name, birthday, gender) {
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
  }
  greet() {
    console.log(`${this.name}: Hello!`);
  }
}

module.exports = Person;