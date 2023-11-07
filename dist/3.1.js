"use strict";
{
    class person {
        constructor(name, age, color) {
            this.name = name;
            this.age = age;
            this.color = color;
        }
    }
    class student extends person {
        constructor(name, age, color) {
            super(name, age, color);
        }
        getAge() {
            return `${this.name} is ${this.age} years old`;
        }
    }
    // const dog =new person('babu',23,'red')
    // console.log(dog.name)
    const jaberDetails = new student('jaber', 27, 'red');
    const jabFUnc = jaberDetails.getAge();
    console.log(jaberDetails, jabFUnc);
}
