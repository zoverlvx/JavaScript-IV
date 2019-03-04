// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        const {name, age, location, gender} = props;
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}; I am from ${this.location}`)
    }
}

const person = new Person({
    name: "person",
    age: "43",
    location: "space",
    gender: "robot"
});
console.log(person.name);
console.log(person.age);
console.log(person.location);
person.speak()

class Instructor extends Person {
    constructor(props) {
        super(props);
        const {specialty, favLanguage, catchPhrase} = props;
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    gradeStudent (student) {
        const choice = ["add", "subtract"];
        const rand = choice[Math.floor(Math.random() * choice.length)];
        if (rand === "add") {
            student.grade = student.grade + Math.floor((Math.random() * 10) + 1);
        }
        if (rand === "subtract") {
            student.grade = student.grade - Math.floor((Math.random() * 10) + 1);

        }
    }
}

const instructor = new Instructor({
    name: "instructor",
    age: "47",
    location: "spaceship",
    gender: "M",
    specialty: "JS",
    favLanguage: "JS",
    catchPhrase: "D'oh!"
});
console.log(instructor.name);
console.log(instructor.age);
console.log(instructor.location);
console.log(instructor.specialty);
console.log(instructor.favLanguage);
console.log(instructor.catchPhrase);
instructor.speak();
instructor.demo("JS");
instructor.grade({name: "student"}, "Python");

class Student extends Person {
    constructor(props) {
        super(props);
        const {previousBackground, className, favSubjects, grade} = props;
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }
    listsSubjects () {
        this.favSubjects.forEach(subject => console.log(`Fav subject: ${subject}`));
    }
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge ${subject}`);
    }
    graduate () {
        if (this.grade >= 70) {
            console.log(`${this.name} has graduated!`);
        }
        if (this.grade < 70) {
            console.log(`Student continues studies.`)
        }
    }
}

const student = new Student({
    name: "student",
    age: "20",
    location: "US",
    gender: "F",
    previousBackground: "bartender",
    className: "web18",
    favSubjects: ["JS", "React", "C"],
    grade: 80
});
console.log(student.name);
console.log(student.age);
console.log(student.location);
console.log(student.previousBackground);
console.log(student.className);
console.log(student.grade);
student.speak();
student.listsSubjects();
student.PRAssignment("C");
student.sprintChallenge("C")


class PM extends Instructor {
    constructor (props) {
        super(props);
        const {gradClassName, favInstructor} = props;
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;        
    }
    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
    
}

const pm = new PM({
    name: "pm",
    age: "28",
    location: "Venus",
    gender: "M",
    specialty: "JS",
    favLanguage: "JS",
    catchPhrase: "Howdy do!",
    gradClassName: "web15",
    favInstructor: "Josh"
});
pm.standUp("web18");
pm.debugsCode({name: "student"}, "Python");

instructor.gradeStudent(student);
console.log(student.grade);
pm.gradeStudent(student);
console.log(student.grade);
student.graduate();
