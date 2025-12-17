class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() { 
        console.log(this.name, 'is studying');
        
    }
}

const p1 = new Person('张三', 18);
p1.eat();

const s1 = new Student('李四', 20, '高三');
s1.study();