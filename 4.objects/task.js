it(function Student(name, gender, age)) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
};

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
};

// ваш код для остальных методов


Student.prototype.addMark = function (mark) {
  //ваш код

  if (this.marks === undefined) {
    // добавить первую оценку 
    this.marks = [mark];

  } else {
    // добавить вторую и последующие оценки в массив
    this.marks.push(mark);
  };
};

Student.prototype.addMarks = function (...mark) {
  //ваш код

  if (this.marks = OwnProperty('marks') {
    // добавить первую оценку 
    this.marks.push(...mark);

  } else {
    // добавить вторую и последующие оценки в массив
    this.marks.push(...mark);
  };
};


Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('marks')=== fals || this.marks.length === 0);
}


Student.prototype.exclude = function (reason) {
  //ваш код

  delete this.subject;
  delete this.marks;

  this.excluded = reason;
};
