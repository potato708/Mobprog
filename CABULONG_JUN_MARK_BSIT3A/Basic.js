class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    introduce() {
        console.log("Hello, my name is " + this.name);
        console.log("I am " + this.age + " years old.");
        console.log("My course is " + this.course);
    }

    study() {
        console.log(this.name + " is studying.");
    }
}

let student1 = new Student("Jun Mark", 20, "Information Technology");

console.log("===== STUDENT INFORMATION =====");

student1.introduce();
student1.study();

if (student1.age >= 18) {
    console.log(student1.name + " is an adult.");
} else {
    console.log(student1.name + " is a minor.");
}