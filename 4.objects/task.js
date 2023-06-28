function Student (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
 
let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);
 
Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}
 
Student.prototype.addMark = function(mark) {
    if(this.marks === undefined){
        this.marks = [mark];   
    } else {
        this.marks.push(mark);
    }
    
}
 
Student.prototype.addMarks = function(...marks){
    if(this.marks === undefined){
        this.marks = marks;   
    } else {
        this.marks = this.marks.concat(marks);
    }
}
 
Student.prototype.getAverage = function(){
    if(this.marks === undefined){
        return 'Нет оценок';
    } else {
        return this.marks.reduce( ( a, v ) => a + v, 0 ) / this.marks.length;
    }
}
 
 
Student.prototype.exclude = function(reason){
    delete this.subject;
    delete this.marks;
    this.reason = reason; // тут надо this.excluded = reason;
}


