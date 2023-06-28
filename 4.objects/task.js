function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
};

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};


Student.prototype.addMarks = function (...marks) {
    if ('marks' in this === true) {
        this.marks.push(...marks)
    }
};


Student.prototype.getAverage = function () {
    return this.marks.reduce((acc, item) => acc += item) / this.marks.length;
};


Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};
