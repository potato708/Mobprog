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
            throw new Error("Abstract class 'Info' cannot be instantiated directly.");
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

    introduce() {
        console.log("Hi! I am student " + this.name + " (" + this.age + " yrs old).");
    }
}

class Teacher extends Info {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(this.name + " is teaching " + this.subject);
    }

    introduce() {
        console.log("Hello! I am teacher " + this.name);
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

console.log("--- System Information ---");
console.log("Location: " + schoolConfig.campus + ", " + schoolConfig.location);

console.log("\n--- Introductions ---");
student1.introduce();
student1.study();

teacher1.introduce();
teacher1.teach();

course1.showCourse();

console.log("\n--- Conditional Checks ---");

if (student1.getGrade() >= gradingScale.excellentMark) {
    console.log(student1.name + " has an Excellent Grade!");
} else {
    console.log(student1.name + " has a Regular Grade.");
}

if (isOpen) {
    console.log(schoolName + " is open.");
}

if (year === 2026) {
    console.log("Current year is 2026.");
}

console.log("\n--- Loops Output ---");

console.log("Subjects:");
for (let i = 0; i < subjects.length; i++) {
    console.log(" - " + subjects[i]);
}

console.log("\nRegistered Students:");
for (let student of students) {
    console.log(" - Student: " + student.name);
}

console.log("\nGrades List:");
let count = 0;
while (count < grades.length) {
    console.log(" - Grade: " + grades[count]);
    count++;
}