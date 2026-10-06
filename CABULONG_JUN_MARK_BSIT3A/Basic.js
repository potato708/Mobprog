class Student {
    constructor(name, age, course, grade) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.grade = grade;
    }

    introduce() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
        console.log("Grade: " + this.grade);
    }

    checkGrade() {
        if (this.grade >= 75) {
            console.log(this.name + " passed.");
        } else {
            console.log(this.name + " failed.");
        }
    }
}

let student = new Student("Jun Mark", 20, "BSIT", 85);

console.log("===== STUDENT =====");

student.introduce();
student.checkGrade();