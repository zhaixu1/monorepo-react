// 开闭原则

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    doing() {
        console.log('doing...');
    }

    eat() {
        console.log('eating...');
    }
}

class Student extends Person{
    constructor(name, age) {
        super(name, age)
    }

    doing() {
        console.log("i am study");
    }

    study() {
        console.log('studying...');
    }
}

// 在React中，我们通常会通过继承的方式来创建组件


