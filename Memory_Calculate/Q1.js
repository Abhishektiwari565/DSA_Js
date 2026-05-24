class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log("ID:", this.id, "Name:", this.name);
    }
}

let students = [];

function addStudent(id, name) {
    students.push(new Student(id, name));
}

function displayAll() {
    console.log("\n--- Student List ---");
    for (let i = 0; i < students.length; i++) {
        students[i].display();
    }
}

function removeStudent(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);
            console.log("Student removed!");
            return;
        }
    }
    console.log("Student not found!");
}

function searchStudent(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log("Student Found:");
            students[i].display();
            return;
        }
    }
    console.log("Student not found!");
}

addStudent(1, "Rahul");
addStudent(2, "Amit");
addStudent(3, "Sneha");

displayAll();

searchStudent(2);

removeStudent(1);

displayAll();