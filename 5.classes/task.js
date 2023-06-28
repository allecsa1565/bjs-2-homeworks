class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
            return;
        }

        if (value > 100) {
            this._state = 100;
            return;
        }

        this._state = value;
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library  {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state <= 30) {
            return;
        }

        this.books.push(book);
    }

    findBookBy(type, value) {
        return this.books.find(function (item) {
            return item[type] === value;
        }) ?? null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(function (item) {
            return item.name === bookName;
        });

        if (bookIndex < 0) {
            return null;
        }

        const book = this.books[bookIndex];

        this.books.splice(bookIndex, 1);

        return book;
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }
      
    addMark(mark, subject) {
        if (!this.marks.hasOwnProperty(subject)) {
          this.marks[subject] = [];
        }

        if (mark < 1 || mark > 5) {
            throw new Error('Неверный формат оценки');
        }
      
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        const subjectMarks = this.marks[subject];

        if (!subjectMarks) {
            return null;
        }
        
        return subjectMarks.reduce(function (acc, mark) {
            return acc + mark;
          }, 0) / subjectMarks.length;
    }
      
    getAverage() {
        const subjects = Object.keys(this.marks);
        const subjectsCount = subjects.length;
        let sum = 0;

        subjects.forEach((subject) => {
            sum = sum + this.getAverageBySubject(subject);
        });

        return sum / subjectsCount;
    }
      
    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
    }
}
