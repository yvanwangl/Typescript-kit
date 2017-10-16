interface Person {
    firstName: string,
    lastName: string
}

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

function greeter(person: Person): string {
    return `hello, ${person.firstName}`;
}

let student = new Student('wang', 'Mr.', 'yafei');


document.body.innerHTML = greeter(student);