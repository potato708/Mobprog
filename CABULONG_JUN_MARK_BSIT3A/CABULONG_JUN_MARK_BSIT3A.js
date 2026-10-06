                    
let schoolConfig = {
    campus: "Main Campus",
    location: "Calbayog City"
};

let gradingScale = {
    passingMark: 75,
    excellentMark: 90
};

let schoolName = "NWSSU College";
let year = 2026;
let isOpen = true;

let subjects = ["IT Elec2", "IT303", "IT304"];
let grades = [80, 85, 90];
let students = [];

class Info {
    constructor(name, age) {
        if (this.constructor === Info) {
            throw new Error("Info is an abstract class.");
        }

        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("Hello, my name is " + this.name);
    }

    getRole() {
        return "General Member";
    }
}

class Student extends Info {
    #grade;

    constructor(name, age, grade) {
        super(name, age);
        this.#grade = grade;
    }

    study() {
        console.log(this.name + " is studying.");
    }

    getGrade() {
        return this.#grade;
    }

    getStatus() {
        if (this.#grade >= gradingScale.excellentMark) {
            return "Excellent";
        } else if (this.#grade >= gradingScale.passingMark) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    introduce() {
        console.log(
            "Hi! I am student " + this.name +
            ", " + this.age + " years old."
        );
    }
}

class Teacher extends Info {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(this.name + " is teaching " + this.subject + ".");
    }

    introduce() {
        console.log("Hello! I am teacher " + this.name + ".");
    }
}

class Course {
    #courseName;

    constructor(courseName) {
        this.#courseName = courseName;
    }

    showCourse() {
        console.log("Course: " + this.#courseName);
    }
}

let student1 = new Student("Jun", 21, 80);
let student2 = new Student("Mark", 19, 92);

let teacher1 = new Teacher("Sir Yuri", 26, "IT303");
let course1 = new Course("Information Technology");

students.push(student1);
students.push(student2);

console.log("===== SCHOOL INFORMATION =====");
console.log("School: " + schoolName);
console.log("Campus: " + schoolConfig.campus);
console.log("Location: " + schoolConfig.location);
console.log("Year: " + year);
console.log("Status: " + (isOpen ? "Open" : "Closed"));

console.log("\n===== STUDENTS =====");

for (let student of students) {
    student.introduce();
    student.study();
    console.log("Grade: " + student.getGrade());
    console.log("Status: " + student.getStatus());
    console.log();
}

console.log("===== TEACHER =====");

teacher1.introduce();
teacher1.teach();

console.log("\n===== COURSE =====");

course1.showCourse();

console.log("\n===== SUBJECTS =====");

for (let subject of subjects) {
    console.log("- " + subject);
}

console.log("\n===== GRADES =====");

let count = 0;

while (count < grades.length) {
    console.log("- Grade: " + grades[count]);
    count++;
}
```
